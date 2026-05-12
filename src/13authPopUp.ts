import { Browser, chromium, Page, BrowserContext } from "@playwright/test";

let page: Page;

(async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });

  // Handling Basic Auth using httpCredentials in browser context
  let context = await browser.newContext({
    httpCredentials: {
      username: 'admin',
      password: 'admin'
    }
  });

  // basic auth pop up: username/password

  page = await context.newPage();
  await page.goto('https://the-internet.herokuapp.com/basic_auth');

  // Alternative way to handle basic auth via URL:
  // let username = 'admin';
  // let password = 'admin';
  
  // // username:password
  // // page.goto(`https://${username}:${password}@the-internet.herokuapp.com/basic_auth`);

  console.log('Finished Basic Auth test');

})();