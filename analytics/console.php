<?php
declare(strict_types=1);
if (PHP_SAPI !== 'cli') { http_response_code(404); exit; }
require __DIR__.'/report.php';
$mode=$argv[1] ?? '';
if ($mode==='preview') { echo demoReport()['html']; exit; }
$config=require dirname(__DIR__).'/analytics-config.php';
if ($mode==='send-test') {
    if (!sendReport($config,demoReport(),true)) throw new RuntimeException('Mail handoff failed');
    echo "Test email accepted by mail transport; inbox delivery requires recipient confirmation.\n"; exit;
}
if ($mode==='install') { database($config)->exec(file_get_contents(__DIR__.'/schema.sql')); echo "Schema installed.\n"; exit; }
if (!in_array($mode, ['daily', 'monthly'], true)) throw new RuntimeException('Use preview, send-test, install, daily or monthly');
$db=database($config);
$now=clockNow(); [$start,$end]=previousMonth($now); $period=substr($start,0,7);
$db->prepare('DELETE FROM analytics_events WHERE day < ?')->execute([$now->modify('-90 days')->format('Y-m-d')]);
if ($mode === 'daily') { echo "Retention cleanup complete.\n"; exit; }
if ($config['started'] >= $end) { echo "No collection in previous month.\n"; exit; }
$lock=$db->query("SELECT GET_LOCK('analytics_monthly_report', 0)")->fetchColumn();
if ((int)$lock!==1) { echo "Report already running.\n"; exit; }
try {
    $s=$db->prepare('SELECT status FROM analytics_reports WHERE period=?'); $s->execute([$period]); $status=$s->fetchColumn();
    if ($status==='sent') { echo "Report already sent.\n"; exit; }
    if ($status==='sending') throw new RuntimeException('Previous mail handoff is ambiguous; inspect before retry');
    $rows=[]; $previous=(new DateTimeImmutable($start))->modify('-1 month')->format('Y-m-d');
    foreach (SITES as $site) $rows[$site]=['current'=>summarize($db,$site,$start,$end),'previous'=>summarize($db,$site,$previous,$start)];
    $report=reportContent($rows,$period,$config['started']);
    $db->prepare("INSERT INTO analytics_reports(period,status) VALUES (?,'sending') ON DUPLICATE KEY UPDATE status='sending'")->execute([$period]);
    $sent=sendReport($config,$report);
    $db->prepare('UPDATE analytics_reports SET status=? WHERE period=?')->execute([$sent?'sent':'failed',$period]);
    if (!$sent) throw new RuntimeException('Mail handoff failed');
    echo "Monthly email accepted by mail transport.\n";
} finally { $db->query("SELECT RELEASE_LOCK('analytics_monthly_report')"); }
