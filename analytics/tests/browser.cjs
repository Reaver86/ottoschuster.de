const {chromium}=require('playwright');
const fs=require('fs'),path=require('path'),assert=require('assert/strict');
const root=process.cwd();
(async()=>{
 const browser=await chromium.launch({channel:'chrome',headless:true}); let checks=0;
 const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.webp':'image/webp','.jpg':'image/jpeg','.png':'image/png','.pdf':'application/pdf'};
 for(const width of [320,390,1440]) {
  const context=await browser.newContext({viewport:{width,height:900}});
  const received=[]; const errors=[];
  await context.route('**/*',async route=>{
   const url=new URL(route.request().url());
   if(!['www.ottoschuster.de','www.teslime.de'].includes(url.hostname)) return route.abort();
   if(url.pathname==='/metrics/collect.php'){received.push(JSON.parse(route.request().postData()));return route.fulfill({status:204});}
   const base=url.hostname.includes('teslime')?path.resolve(root,'../teslime.de/dist'):path.join(root,'dist');
   const file=path.join(base,decodeURIComponent(url.pathname),url.pathname.endsWith('/')?'index.html':'');
   if(!fs.existsSync(file)) return route.fulfill({status:404});
   await route.fulfill({path:file,contentType:types[path.extname(file)]||'application/octet-stream'});
  });
  const page=await context.newPage(); page.on('pageerror',e=>errors.push(e.message));
  for(const locale of ['de','ro']) for(const slug of ['', 'preise/','faq/','kontakt/','impressum/','datenschutz/']) {
   const before=received.length;
   await page.goto(`https://www.ottoschuster.de/${locale}/${slug}?private=excluded#not-recorded`);
   await page.waitForFunction(()=>document.readyState==='complete');
   await page.waitForTimeout(100);
   assert.equal(received.length,before+1); assert.equal(received.at(-1).event,'pageview'); assert(!JSON.stringify(received.at(-1)).includes('private'));
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`overflow ${locale} ${slug} ${width}`);
   await page.screenshot({path:`output/playwright/analytics/otto-${locale}-${slug.replace('/','')||'home'}-${width}.png`});
   if(slug==='datenschutz/') { await page.getByRole('heading',{name:locale==='de'?'Besuchsstatistik':'Statistici de vizitare',exact:true}).scrollIntoViewIfNeeded(); await page.screenshot({path:`output/playwright/analytics/privacy-${locale}-${width}.png`}); }
   const events=await page.locator('[data-analytics-event]').evaluateAll(es=>[...new Set(es.map(e=>e.dataset.analyticsEvent))]);
   await page.evaluate(()=>document.addEventListener('click',e=>{if(e.target.closest('a'))e.preventDefault();}));
   for(const event of events){ const start=received.length; await page.locator(`[data-analytics-event="${event}"]`).first().click(); await page.waitForTimeout(75); assert.equal(received.length,start+1); assert.equal(received.at(-1).event,event);checks++; }
   checks++;
  }
  await page.goto('https://www.teslime.de/'); await page.waitForTimeout(150);
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Teslime overflow');
  await page.locator('#analytics-privacy').scrollIntoViewIfNeeded();
  await page.screenshot({path:`output/playwright/analytics/teslime-privacy-${width}.png`});
  await page.evaluate(()=>document.addEventListener('click',e=>{if(e.target.closest('a'))e.preventDefault();}));
  for(const event of ['contact-whatsapp','contact-email']) for(const link of await page.locator(`[data-analytics-event="${event}"]`).all()){const start=received.length;await link.click();await page.waitForTimeout(75);assert.equal(received.length,start+1);checks++;}
  assert.deepEqual(errors,[]);
  // Test privacy controls on a fresh document.
  for(const signal of ['doNotTrack','globalPrivacyControl']) {
   const start=received.length;
   const privacyPage=await context.newPage();
   await privacyPage.addInitScript(signal=>Object.defineProperty(navigator,signal,{get:()=>signal==='doNotTrack'?'1':true}),signal);
   await privacyPage.goto('https://www.ottoschuster.de/de/');await privacyPage.waitForTimeout(150);assert.equal(received.length,start);await privacyPage.close();checks++;
  }
  // Collection failures must not break ordinary site navigation.
  await context.route('**/metrics/collect.php',route=>route.abort());
  const blocked=await context.newPage();
  await blocked.goto('https://www.ottoschuster.de/de/');
  await blocked.locator('header a[href="/de/kontakt/"]').first().click();
  assert.equal(new URL(blocked.url()).pathname,'/de/kontakt/');checks++;
  assert.equal((await context.cookies()).length,0);
  assert.equal(await blocked.evaluate(()=>localStorage.length+sessionStorage.length),0);checks++;
  await context.close();
  const preview=await browser.newPage({viewport:{width,height:900}});
  await preview.goto('file://'+path.join(root,'output/analytics/test-report.html'));
  assert(await preview.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'report overflow');
  await preview.screenshot({path:`output/playwright/analytics/email-${width}.png`,fullPage:true});await preview.close();
 }
 await browser.close();console.log(`${checks} browser checks passed`);
})().catch(e=>{console.error(e);process.exit(1)});
