const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  const navbar = await page.locator('nav').innerHTML();
  console.log(navbar);
  await browser.close();
})();