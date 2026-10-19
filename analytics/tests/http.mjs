import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { mkdtempSync, mkdirSync, copyFileSync, writeFileSync } from 'node:fs';
import { tmpdir, userInfo } from 'node:os';
import path from 'node:path';
const php=process.env.PHP_BINARY || 'php';
const root=mkdtempSync(path.join(tmpdir(),'analytics-http-'));
mkdirSync(path.join(root,'httpdocs/metrics'),{recursive:true});mkdirSync(path.join(root,'private/analytics'),{recursive:true});
for(const f of ['core.php','collect.php']) copyFileSync('analytics/'+f,path.join(root,'private/analytics',f));
copyFileSync('public/metrics/collect.php',path.join(root,'httpdocs/metrics/collect.php'));
const config={site:'ottoschuster.de',dsn:'mysql:unix_socket=/tmp/website-analytics-test.sock;dbname=website_analytics_test;charset=utf8mb4',user:userInfo().username,password:'',secret:'x'.repeat(32)};
writeFileSync(path.join(root,'private/analytics-config.php'),'<?php return json_decode('+JSON.stringify(JSON.stringify(config))+',true);',{mode:0o600});
const server=spawn(php,['-S','127.0.0.1:8899','-t',path.join(root,'httpdocs')],{stdio:'ignore'});
const url='http://127.0.0.1:8899/metrics/collect.php';
let checks=0;
try {
 for(let i=0;i<40;i++){try{await fetch(url);break;}catch{await new Promise(r=>setTimeout(r,50));}}
 const body={id:'c'.repeat(32),event:'pageview',path:'/de/',referrer:'google.com'};
 const headers={'Origin':'https://www.ottoschuster.de','User-Agent':'Mozilla/5.0 iPhone Mobile','Content-Type':'application/json'};
 const send=(body,extra={})=>fetch(url,{method:'POST',headers:{...headers,...extra},body:typeof body==='string'?body:JSON.stringify(body)});
 assert.equal((await fetch(url)).status,405);checks++;
 let r=await send(body);assert.equal(r.status,204);assert.equal(r.headers.get('cache-control'),'no-store');assert.equal(r.headers.get('set-cookie'),null);checks++;
 assert.equal((await send(body)).status,204);checks++;
 for(const invalid of [{...body,path:'/de/?private=1'},{...body,event:'made-up'},'{bad',[],null]){assert.equal((await send(JSON.stringify(invalid))).status,400);checks++;}
 assert.equal((await send('x'.repeat(2049))).status,413);checks++;
 assert.equal((await send(body,{Origin:'https://evil.example'})).status,400);checks++;
 assert.equal((await send(body,{DNT:'1'})).status,204);checks++;
 assert.equal((await fetch('http://127.0.0.1:8899/private/analytics-config.php')).status,404);checks++;
 // Missing private app gives a quiet 503; no filesystem details or PHP source.
 copyFileSync('public/metrics/collect.php',path.join(root,'httpdocs/missing.php'));
 r=await fetch('http://127.0.0.1:8899/missing.php');assert.equal(r.status,503);assert.equal(await r.text(),'');checks++;
 console.log(`${checks} HTTP endpoint checks passed`);
} finally {server.kill();}
