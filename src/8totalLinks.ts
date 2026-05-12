import { Browser, chromium, firefox, webkit, Locator, Page, selectors } from "@playwright/test";

//IIFE
(async () => {

    let browser: Browser = await chromium.launch(
        {
            headless: false,
            channel: 'chrome',
        });
    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

     let allLinks:string[] = await page.locator('//a').allInnerTexts();
    
     console.log(allLinks.length);
    let allImages: Locator[] = await page.locator('//img[@alt]').all();
    console.log('total number of images: ' + allImages.length);

    for (let e of allImages) {
        console.log(await e.getAttribute('alt'));
    }   
    let footerLinks: Locator[] = await page.locator('footer a').all();
    console.log(footerLinks.length);

    let allFooterLinks = []; //0

    for (let e of footerLinks) {
        let linkText: string = await e.innerText();
        //console.log(await e.getAttribute('href'));
        // let linkText: string = await e.innerText();
        allFooterLinks.push(linkText);
    }

    console.log(allFooterLinks.length);
    console.log(allFooterLinks);
    page.close();
})();