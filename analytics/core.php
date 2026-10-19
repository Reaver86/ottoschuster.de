<?php
declare(strict_types=1);

const SITES = ['ottoschuster.de', 'teslime.de'];
const EVENTS = ['pageview', 'contact-phone', 'contact-email', 'contact-whatsapp', 'sample-pdf'];
function clockNow(): DateTimeImmutable { return new DateTimeImmutable('now', new DateTimeZone('Europe/Berlin')); }
function database(array $config): PDO {
    return new PDO($config['dsn'], $config['user'], $config['password'], [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_EMULATE_PREPARES => false]);
}
function normalizeEvent(array $body, array $server, array $config, DateTimeImmutable $now): ?array {
    $site = $config['site'];
    if (!in_array($site, SITES, true)) throw new RuntimeException('Unknown site');
    if (($server['HTTP_DNT'] ?? '') === '1' || ($server['HTTP_SEC_GPC'] ?? '') === '1') return null;
    if (!in_array($server['HTTP_ORIGIN'] ?? '', ["https://$site", "https://www.$site"], true)) throw new InvalidArgumentException('Origin');
    $ua = substr($server['HTTP_USER_AGENT'] ?? '', 0, 1024);
    if (!$ua || preg_match('/bot|spider|crawl|headless|curl|wget|monitor|uptime|preview/i', $ua)) return null;
    $event = $body['event'] ?? null;
    $path = $body['path'] ?? null;
    $id = $body['id'] ?? null;
    if (!is_string($id) || !preg_match('/^[a-f0-9]{32}$/D', $id) || !in_array($event, EVENTS, true) || !is_string($path)) throw new InvalidArgumentException('Event');
    $validPath = $site === 'teslime.de' ? $path === '/' : preg_match('#^/(de|ro)/(?:preise/|faq/|kontakt/|impressum/|datenschutz/)?$#D', $path);
    if (!$validPath) throw new InvalidArgumentException('Path');
    $referrer = $body['referrer'] ?? '';
    if (!is_string($referrer) || strlen($referrer) > 253 || ($referrer !== '' && !preg_match('/^(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,63}$/D', $referrer))) throw new InvalidArgumentException('Referrer');
    if (in_array($referrer, [$site, 'www.'.$site], true)) $referrer = '';
    $device = preg_match('/ipad|tablet/i', $ua) ? 'tablet' : (preg_match('/mobile|android|iphone/i', $ua) ? 'mobile' : 'desktop');
    $day = $now->format('Y-m-d');
    $ip = $server['REMOTE_ADDR'] ?? '';
    if (!filter_var($ip, FILTER_VALIDATE_IP)) throw new InvalidArgumentException('Address');
    if (strlen($config['secret']) < 32) throw new RuntimeException('Secret too short');
    return ['id'=>$id, 'site'=>$site, 'day'=>$day, 'event'=>$event, 'path'=>$path, 'referrer'=>$referrer, 'device'=>$device,
        'visitor'=>hash_hmac('sha256', "$site|$day|$ip|$ua", $config['secret'])];
}
function saveEvent(PDO $db, array $e): bool {
    // Serialize each daily visitor's writes so concurrent requests cannot evade the cap.
    $lock = 'a:'.substr(hash('sha256', $e['site'].$e['visitor']), 0, 60);
    $s = $db->prepare('SELECT GET_LOCK(?, 2)'); $s->execute([$lock]);
    if ((int)$s->fetchColumn() !== 1) throw new RuntimeException('Busy');
    try {
        $s = $db->prepare('SELECT COUNT(*) FROM analytics_events WHERE site=? AND day=? AND visitor=?');
        $s->execute([$e['site'], $e['day'], $e['visitor']]);
        if ((int)$s->fetchColumn() >= 500) return false;
        $s = $db->prepare('INSERT IGNORE INTO analytics_events (id,site,day,event,path,referrer,device,visitor) VALUES (?,?,?,?,?,?,?,?)');
        $s->execute([$e['id'], $e['site'], $e['day'], $e['event'], $e['path'], $e['referrer'], $e['device'], $e['visitor']]);
        return $s->rowCount() === 1;
    } finally { $db->prepare('SELECT RELEASE_LOCK(?)')->execute([$lock]); }
}
function previousMonth(DateTimeImmutable $now): array {
    $end = $now->modify('first day of this month')->setTime(0,0);
    return [$end->modify('-1 month')->format('Y-m-d'), $end->format('Y-m-d')];
}
function summarize(PDO $db, string $site, string $start, string $end): array {
    $s = $db->prepare('SELECT day,event,path,referrer,device,visitor FROM analytics_events WHERE site=? AND day>=? AND day<? ORDER BY day');
    $s->execute([$site,$start,$end]);
    return summarizeRows((function () use ($s) {
        while ($row = $s->fetch(PDO::FETCH_ASSOC)) yield $row;
    })());
}
function summarizeRows(iterable $rows): array {
    $r = ['views'=>0, 'daily'=>[], 'devices'=>[], 'pages'=>[], 'referrers'=>[], 'events'=>[], 'visitors'=>0, 'languages'=>[], 'dailyVisitors'=>[]]; $seen=[];
    foreach ($rows as $e) {
        if ($e['event'] !== 'pageview') { $r['events'][$e['event']] = ($r['events'][$e['event']] ?? 0)+1; continue; }
        $language = str_starts_with($e['path'], '/ro/') ? 'Romanian' : 'German';
        $r['languages'][$language] = ($r['languages'][$language] ?? 0)+1;
        $r['views']++;
        $visitorDay = $e['day'].'|'.$e['visitor'];
        if (!isset($seen[$visitorDay])) {
            $r['dailyVisitors'][$e['day']] = ($r['dailyVisitors'][$e['day']] ?? 0)+1;
            $seen[$visitorDay] = true;
        }
        foreach (['daily'=>'day','devices'=>'device','pages'=>'path','referrers'=>'referrer'] as $group=>$key) {
            $value = $e[$key] ?: 'Direct / unknown'; $r[$group][$value] = ($r[$group][$value] ?? 0)+1;
        }
    }
    $r['visitors']=count($seen);
    foreach (['devices','pages','referrers','events'] as $key) arsort($r[$key]);
    return $r;
}
