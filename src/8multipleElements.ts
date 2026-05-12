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

    let rightPanelLinks: string[] = await page.locator('a.list-group-item').allInnerTexts();

    console.log(rightPanelLinks.length); // 13
    console.log(rightPanelLinks); // ['Login', 'Register', ...]

    for (let e of rightPanelLinks) {
        console.log(e);
        if (e === 'Forgotten Password') {
            await page.getByText(e).first().click();
            break;
        }
    }


    console.log("--------------");

    for (let i = 0; i < rightPanelLinks.length; i++) {
        console.log(rightPanelLinks[i]);
    }


    let footerLinks: Locator[] = await page.locator('footer a').all();
    console.log(footerLinks.length);

    for (let e of footerLinks) {
    console.log(await e.innerText());
    console.log(await e.getAttribute('href'))
    }
    page.close();
})();