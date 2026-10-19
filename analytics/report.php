<?php
declare(strict_types=1);
require_once __DIR__.'/core.php';
const REPORT_RECIPIENTS = ['alexander.schuster86@gmail.com', 'otto.schuster@ottoschuster.de'];

function germanMonth(string $period): string {
    $months = [1=>'Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
    return $months[(int)substr($period,5,2)].' '.substr($period,0,4);
}

function reportContent(array $sites, string $period, string $started, bool $test = false): array {
    $title = ($test ? 'TEST · ' : '').'Website-Bericht · '.germanMonth($period);
    $text = $title."\n\n".($test ? "DEMODATEN — erfundene Zahlen zur Vorschau des Berichts.\n\n" : "Beginn der Erfassung: $started. Für frühere Monate liegen keine Vergleichsdaten vor.\n\n");
    $esc = fn($v) => htmlspecialchars((string)$v, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $html = '<!doctype html><html lang="de"><meta name="viewport" content="width=device-width"><body style="margin:0;background:#f4f5f7;color:#17212b;font:16px Arial,sans-serif"><main style="max-width:640px;margin:auto;padding:24px"><h1 style="font-size:26px">'.$esc($title).'</h1><p>'.($test ? '<strong>DEMODATEN — erfundene Zahlen, nur zur Vorschau.</strong>' : 'Beginn der Erfassung: '.$esc($started).'. Für frühere Monate liegen keine Vergleichsdaten vor.').'</p>';
    foreach ($sites as $site=>$data) {
        $r=$data['current']; $prev=$data['previous'];
        $change=$prev['views'] > 0 ? sprintf('%+.0f%%', ($r['views']/$prev['views']-1)*100) : 'kein Vergleich verfügbar';
        $text .= "$site\nSeitenaufrufe: {$r['views']} (Veränderung: $change)\nSumme der täglichen Besucherschätzungen: {$r['visitors']}\n";
        $html.='<section style="background:white;margin:24px 0;padding:20px;border:1px solid #dde1e7;border-radius:8px"><h2 style="font-size:22px;overflow-wrap:anywhere">'.$esc($site).'</h2><p><strong style="font-size:28px">'.$r['views'].'</strong> Seitenaufrufe · '.$esc($change).' zum Vormonat</p><p>'.$r['visitors'].' summierte tägliche Besucherschätzungen</p>';
        if (!$r['views']) { $text.="Keine Seitenaufrufe erfasst. Mögliche Ursachen sind fehlende Besuche, deaktivierte Erfassung oder ein technisches Problem.\n"; $html.='<p>Keine Seitenaufrufe erfasst. Mögliche Ursachen sind fehlende Besuche, deaktivierte Erfassung oder ein technisches Problem.</p>'; }
        $mobile = $r['views'] > 0 ? round(($r['devices']['mobile'] ?? 0) / $r['views'] * 100).' % mobil' : 'Mobilanteil: keine Daten';
        $text .= $mobile." (Anteil der Seitenaufrufe; Tablets nicht enthalten)\n";
        $html .= '<p><strong>'.$esc($mobile).'</strong><br /><small>Anteil der Seitenaufrufe; Tablets nicht enthalten</small></p>';
        $daily=[]; $date=new DateTimeImmutable($period.'-01');
        for ($i=1;$i<=(int)$date->format('t');$i++) { $day=$period.'-'.str_pad((string)$i,2,'0',STR_PAD_LEFT); $daily[$day]=$r['daily'][$day] ?? 0; }
        foreach (['Tägliche Seitenaufrufe'=>$daily,'Sprachen (Seitenaufrufe)'=>$r['languages'],'Beliebte Seiten'=>$r['pages'],'Verweisende Websites'=>$r['referrers'],'Kontakt- und Dokumentklicks'=>$r['events']] as $label=>$values) {
            $html.='<h3 style="font-size:17px">'.$esc($label).'</h3>'; $text.="\n$label\n";
            if ($label === 'Tägliche Seitenaufrufe') {
                $peak = max([1,...array_values($values)]);
                $html.='<table role="presentation" style="width:100%;table-layout:fixed;border-collapse:collapse"><tr>';
                foreach ($values as $day=>$n) {
                    $visitors = $r['dailyVisitors'][$day] ?? 0;
                    $html.='<td title="'.$esc($day).': '.$n.' Aufrufe, '.$visitors.' geschätzte Besucher" style="vertical-align:bottom;padding:1px;height:80px"><div style="display:inline-block;vertical-align:bottom;width:50%;background:#397b82;height:'.round($n/$peak*80).'px"></div><div style="display:inline-block;vertical-align:bottom;width:50%;background:#adcbd0;height:'.round($visitors/$peak*80).'px"></div></td>';
                    $text.="$day: $n Seitenaufrufe, ".($r['dailyVisitors'][$day] ?? 0)." geschätzte Besucher\n";
                }
                $html.='</tr></table><p style="font-size:12px;color:#53606e">Tage 1–'.count($values).' · höchster Tageswert: '.max($values).'</p>';
                $html.='<p style="font-size:13px"><span style="color:#397b82">■ Seitenaufrufe</span> · <span style="color:#53606e">□ Tägliche Besucherschätzungen (helle Balken)</span></p>';
                continue;
            }
            $html.='<table role="presentation" style="width:100%;border-collapse:collapse;table-layout:fixed">';
            if (!$values) { $html.='<tr><td>Keine Daten erfasst</td></tr>'; $text.="Keine Daten erfasst\n"; }
            foreach (array_slice($values,0,10,true) as $key=>$value) {
                $display = ['contact-phone'=>'Telefonklicks','contact-email'=>'E-Mail-Klicks','contact-whatsapp'=>'WhatsApp-Klicks','sample-pdf'=>'Beispiel-PDF-Klicks','mobile'=>'Mobil','desktop'=>'Computer','tablet'=>'Tablet','German'=>'Deutsch','Romanian'=>'Rumänisch','Direct / unknown'=>'Direkt / unbekannt'][$key] ?? $key;
                $html.='<tr><td style="padding:5px 0;overflow-wrap:anywhere">'.$esc($display).'</td><td style="text-align:right;width:55px">'.$value.'</td></tr>';
                $text.="$display: $value\n";
            }
            $html.='</table>';
        }
        $html.='</section>'; $text.="\n";
    }
    $notes='Besucherschätzungen beginnen jeden Tag und für jede Website neu. Ihre Summe entspricht nicht der Anzahl unterschiedlicher Personen im Monat. Gemeinsam genutzte Netzwerke und wechselnde Geräte beeinflussen die Schätzung. Kontaktklicks zeigen Interesse, keine abgeschlossenen Anfragen. Direkt / unbekannt umfasst fehlende Herkunftsangaben. Die Bot-Erkennung ist unvollständig. Do Not Track, Werbeblocker und deaktiviertes JavaScript verringern die gemessenen Aufrufe. Einzelereignisse werden 90 Tage gespeichert. E-Mail-Berichte bleiben bis zu ihrer Löschung im Postfach.';
    $text.=$notes; $html.='<p style="font-size:13px;line-height:1.5;color:#53606e">'.$esc($notes).'</p></main></body></html>';
    return ['subject'=>$title,'text'=>$text,'html'=>$html];
}
function demoReport(): array {
    $rows=[];
    foreach (SITES as $site) {
        $events=[];
        for ($i=1;$i<=65;$i++) $events[]=['day'=>'2026-10-'.str_pad((string)(($i%19)+1),2,'0',STR_PAD_LEFT),'event'=>'pageview','path'=>$site==='teslime.de'?'/':($i%2?'/de/':'/ro/kontakt/'),'referrer'=>$i%3?'':'google.com','device'=>$i%3?'mobile':'desktop','visitor'=>(string)($i%27)];
        $events[]=['event'=>'contact-whatsapp']; $events[]=['event'=>'contact-email'];
        $rows[$site]=['current'=>summarizeRows($events),'previous'=>summarizeRows([])];
    }
    return reportContent($rows,'2026-10','nicht aktiviert',true);
}
function sendReport(array $config, array $report, bool $test = false): bool {
    if (($config['recipients'] ?? []) !== REPORT_RECIPIENTS) throw new RuntimeException('Unexpected recipients');
    $recipients = $test ? [REPORT_RECIPIENTS[0]] : REPORT_RECIPIENTS;
    if (!filter_var($config['sender'], FILTER_VALIDATE_EMAIL) || preg_match('/[\r\n]/',$config['sender'])) throw new RuntimeException('Invalid sender');
    $boundary='analytics_'.bin2hex(random_bytes(16));
    $headers=['From'=>'Website-Berichte <'.$config['sender'].'>', 'MIME-Version'=>'1.0', 'Content-Type'=>'multipart/alternative; boundary="'.$boundary.'"'];
    $body='';
    foreach (['text/plain'=>'text','text/html'=>'html'] as $type=>$key) $body.="--$boundary\r\nContent-Type: $type; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n".chunk_split(base64_encode($report[$key]))."\r\n";
    $body.="--$boundary--\r\n";
    return mail(implode(', ', $recipients), '=?UTF-8?B?'.base64_encode($report['subject']).'?=', $body, $headers);
}
