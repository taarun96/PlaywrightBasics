import { Browser, chromium, firefox, webkit, Locator, Page, selectors } from "@playwright/test";

//IIFE
(async () => {

    let browser: Browser = await chromium.launch(
        {
            headless: false,
            channel: 'chrome',
        });
    let page: Page = await browser.newPage();
    
    
    //usecase1
    
    /*
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    //get all the footers -- 16
    //out of 16, capture that footer link where text = Privacy Policy

    let footerEle: Locator = page.locator('footer a');
    footerEle.filter({ hasText: 'Privacy Policy', visible: true }).click();
        */

    //usecase2
/*
    await page.goto('https://www.google.com/');
    await page.locator("[name='q']").fill('selenium testing');
    await page.locator(`ul[role='listbox'] li div[role='option']`).filter({ hasText: 'java' }).click();

*/
//usecase 3
    await page.goto('https://www.flipkart.com/');
    await page.locator("input[name='q']").fill('macbook pro');
    await page.locator("div._1AtVbE div.Kz79Y9").filter({ hasText: 'macbook pro m3' }).click();

})();