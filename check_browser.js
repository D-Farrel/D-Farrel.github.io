const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  await page.evaluateOnNewDocument(() => { sessionStorage.clear(); });
  await page.goto('http://localhost:8080', { waitUntil: 'networkidle0' });
  const loaderText = await page.evaluate(() => document.getElementById('loaderCounter') ? document.getElementById('loaderCounter').innerText : 'no loader');
  console.log('Final loader text:', loaderText);
  await browser.close();
})();
