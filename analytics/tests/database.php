<?php
declare(strict_types=1);
require __DIR__.'/core.php';
$dsn=getenv('ANALYTICS_TEST_DSN') ?: 'mysql:unix_socket=/tmp/website-analytics-test.sock;dbname=website_analytics_test;charset=utf8mb4';
if (!preg_match('/dbname=[a-z_]*_test(?:;|$)/',$dsn)) throw new RuntimeException('Only a dedicated _test database is allowed');
$db=new PDO($dsn,getenv('ANALYTICS_TEST_USER') ?: get_current_user(),getenv('ANALYTICS_TEST_PASSWORD') ?: '',[PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,PDO::ATTR_EMULATE_PREPARES=>false]);
$db->exec(file_get_contents(dirname(__DIR__).'/schema.sql'));
$db->exec('DELETE FROM analytics_events');$db->exec('DELETE FROM analytics_reports');
$e=normalizeEvent($body,$server,$config,$now);
check(saveEvent($db,$e),'first write');check(!saveEvent($db,$e),'duplicate suppressed');
check((int)$db->query('SELECT COUNT(*) FROM analytics_events')->fetchColumn()===1,'one stored event');
for($i=1;$i<500;$i++) saveEvent($db,[...$e,'id'=>str_pad(dechex($i),32,'0',STR_PAD_LEFT)]);
check(!saveEvent($db,[...$e,'id'=>str_repeat('f',32)]),'rate cap enforced');
check(summarize($db,'ottoschuster.de','2026-10-01','2026-11-01')['views']===500,'SQL month aggregation');
check(summarize($db,'teslime.de','2026-10-01','2026-11-01')['views']===0,'site isolation');
// Run the actual scheduler CLI with a local mail sink, never an SMTP connection.
$tmp=sys_get_temp_dir().'/analytics-tests-'.bin2hex(random_bytes(6));mkdir($tmp,0700);mkdir($tmp.'/analytics',0700);
foreach(['core.php','report.php','console.php'] as $file) copy(dirname(__DIR__).'/'.$file,$tmp.'/analytics/'.$file);
$config=['site'=>'ottoschuster.de','dsn'=>$dsn,'user'=>getenv('ANALYTICS_TEST_USER') ?: get_current_user(),'password'=>getenv('ANALYTICS_TEST_PASSWORD') ?: '', 'secret'=>str_repeat('x',32),'recipients'=>REPORT_RECIPIENTS,'sender'=>'analytics@ottoschuster.de','started'=>'2025-01-01'];
file_put_contents($tmp.'/analytics-config.php','<?php return '.var_export($config,true).';');chmod($tmp.'/analytics-config.php',0600);
$sink=$tmp.'/mail.sh';file_put_contents($sink,"#!/bin/sh\ncat >> '".$tmp."/mail.txt'\n");chmod($sink,0700);
function runConsole(string $tmp,string $sink, string $mode='monthly'): array {
 $cmd=[PHP_BINARY,'-d','sendmail_path='.$sink,$tmp.'/analytics/console.php',$mode];
 $p=proc_open($cmd,[1=>['pipe','w'],2=>['pipe','w']],$pipes);$out=stream_get_contents($pipes[1]).stream_get_contents($pipes[2]);foreach($pipes as $pipe)fclose($pipe);return [proc_close($p),$out];
}
$db->exec('DELETE FROM analytics_events');
[$start,$end]=previousMonth(clockNow());
saveEvent($db,[...$e,'day'=>$start]);
saveEvent($db,[...$e,'id'=>str_repeat('b',32),'day'=>'2020-01-01']);
[$code,$out]=runConsole($tmp,$sink,'daily');check($code===0&&!file_exists($tmp.'/mail.txt'),'daily cleanup sends no email');
[$code,$out]=runConsole($tmp,$sink);check($code===0,'scheduler succeeds: '.$out);
check((int)$db->query('SELECT COUNT(*) FROM analytics_events')->fetchColumn()===1,'retention enforced');
$mail=file_get_contents($tmp.'/mail.txt');check(str_contains($mail,'To: alexander.schuster86@gmail.com, otto.schuster@ottoschuster.de'),'both monthly recipients');
$size=filesize($tmp.'/mail.txt');check($size>100,'mail sink received MIME');
[$code,$out]=runConsole($tmp,$sink);clearstatcache();check($code===0&&filesize($tmp.'/mail.txt')===$size,'repeat run does not resend');
$db->exec("UPDATE analytics_reports SET status='sending'");
[$code,$out]=runConsole($tmp,$sink);check($code!==0&&str_contains($out,'ambiguous'),'ambiguous handoff refuses retry');
$db->exec("UPDATE analytics_reports SET status='failed'");
file_put_contents($sink,"#!/bin/sh\ncat >/dev/null\nexit 1\n");
[$code,$out]=runConsole($tmp,$sink);check($code!==0,'mail failure exits nonzero');
check($db->query('SELECT status FROM analytics_reports')->fetchColumn()==='failed','failed mail remains retryable');
$db->query("SELECT GET_LOCK('analytics_monthly_report', 0)");
[$code,$out]=runConsole($tmp,$sink);check($code===0&&str_contains($out,'already running'),'concurrent report excluded');
$db->query("SELECT RELEASE_LOCK('analytics_monthly_report')");
file_put_contents($sink,"#!/bin/sh\ncat > '".$tmp."/test-mail.txt'\n");
[$code,$out]=runConsole($tmp,$sink,'send-test');check($code===0,'test email accepted by local sink');
$testMail=file_get_contents($tmp.'/test-mail.txt');check(str_contains($testMail,'To: alexander.schuster86@gmail.com')&&!str_contains($testMail,'otto.schuster@ottoschuster.de'),'demo sent only to Alexander');
$db->exec('DELETE FROM analytics_events');$db->exec('DELETE FROM analytics_reports');
echo "$count total core/database/scheduler checks passed. Test artifacts: $tmp\n";
