<?php
declare(strict_types=1);
require dirname(__DIR__).'/report.php';
$count=0;
function check(bool $value, string $label): void { global $count; if (!$value) throw new RuntimeException($label); $count++; }
function rejects(callable $f,string $label): void { try { $f(); } catch (InvalidArgumentException $e) { check(true,$label); return; } throw new RuntimeException($label); }
$config=['site'=>'ottoschuster.de','secret'=>str_repeat('x',32)];
$server=['HTTP_ORIGIN'=>'https://www.ottoschuster.de','REMOTE_ADDR'=>'192.0.2.1','HTTP_USER_AGENT'=>'Mozilla/5.0 iPhone Mobile'];
$body=['id'=>str_repeat('a',32),'event'=>'pageview','path'=>'/de/','referrer'=>'google.com'];
$now=new DateTimeImmutable('2026-10-19',new DateTimeZone('Europe/Berlin'));
$e=normalizeEvent($body,$server,$config,$now);
check($e['device']==='mobile','mobile classification');
check(!str_contains(json_encode($e),'192.0.2.1'),'no raw IP persisted');
check(normalizeEvent($body,$server,$config,$now)['visitor']===$e['visitor'],'same daily visitor');
check(normalizeEvent($body,$server,$config,$now->modify('+1 day'))['visitor']!==$e['visitor'],'daily separation');
$other=normalizeEvent([...$body,'path'=>'/'],[...$server,'HTTP_ORIGIN'=>'https://teslime.de'],[...$config,'site'=>'teslime.de'],$now);
check($other['visitor']!==$e['visitor'],'site separation');
foreach (['HTTP_DNT','HTTP_SEC_GPC'] as $header) check(normalizeEvent($body,[...$server,$header=>'1'],$config,$now)===null,'privacy signal');
check(normalizeEvent($body,[...$server,'HTTP_USER_AGENT'=>'Googlebot'],$config,$now)===null,'bot filtered');
foreach (['path'=>'/de/?email=secret','event'=>'arbitrary','referrer'=>'google.com/path','id'=>'bad'] as $key=>$bad) rejects(fn()=>normalizeEvent([...$body,$key=>$bad],$server,$config,$now),'invalid '.$key);
rejects(fn()=>normalizeEvent($body,[...$server,'HTTP_ORIGIN'=>'https://evil.example'],$config,$now),'origin');
rejects(fn()=>normalizeEvent($body,[...$server,'HTTP_ORIGIN'=>'null'],$config,$now),'opaque origin');
check(previousMonth(new DateTimeImmutable('2027-01-01'))===['2026-12-01','2027-01-01'],'year boundary');
check(previousMonth(new DateTimeImmutable('2028-03-31'))===['2028-02-01','2028-03-01'],'leap month boundary');
$summary=summarizeRows([$e,$e,[...$e,'day'=>'2026-10-20'],[...$e,'event'=>'contact-phone']]);
check($summary['views']===3 && $summary['visitors']===2,'page views vs visitor days');
check($summary['events']['contact-phone']===1,'contact events');
$report=demoReport();
check(str_contains($report['text'],'DEMODATEN') && str_contains($report['html'],'teslime.de'),'demo clearly labelled');
$r=reportContent(['<script>'=>['current'=>summarizeRows([]),'previous'=>summarizeRows([])]],'2026-10','2026-10-19');
check(!str_contains($r['html'],'<script>'),'HTML escaping');
check(str_contains($r['html'],'Keine Seitenaufrufe erfasst'),'empty data explained');
try { sendReport(['recipients'=>['wrong@example.org']], $report); throw new RuntimeException('Recipient guard absent'); } catch (RuntimeException $e) { check($e->getMessage()==='Unexpected recipients','only authorized recipients'); }
check(str_contains($report['subject'],'Oktober 2026') && str_contains($report['html'],'lang="de"'),'German subject and document');
$r=reportContent(['ottoschuster.de'=>['current'=>['views'=>100,'visitors'=>80,'devices'=>['mobile'=>62,'tablet'=>8,'desktop'=>30],'daily'=>[],'dailyVisitors'=>[],'pages'=>[],'languages'=>[],'referrers'=>[],'events'=>[]],'previous'=>summarizeRows([])]],'2026-09','2026-09-01');
check(str_contains($r['html'],'62 % mobil') && str_contains($r['text'],'62 % mobil'),'mobile percentage excludes tablets');
check(!str_contains($r['html'],'Computer') && !str_contains($r['html'],'Devices'),'absolute device counts omitted');
$r=reportContent(['ottoschuster.de'=>['current'=>summarizeRows([]),'previous'=>summarizeRows([])]],'2026-09','2026-09-01');
check(str_contains($r['html'],'Mobilanteil: keine Daten'),'zero traffic percentage unavailable');
echo "$count core checks passed\n";
