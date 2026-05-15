import { chromium, Dialog, Locator } from "@playwright/test";

(async () => {
    const browser = await chromium.launch({ channel: 'chrome', headless: false });
    const page = await browser.newPage();

    //create event listener for Accept Cookies button:
    //background listener:
    page.on('framenavigated', async () => {
        let acceptCookiesButton = page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll');
        if (await acceptCookiesButton.isVisible()) {
            await acceptCookiesButton.click();
        }
    });


    await page.goto("https://www.orangehrm.com/en/contact-sales/");
    //await page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click(); //click on accept cookies

    //target = _blank --> for a new tab/window

    let [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('//a[contains(@href, "linkedin")]').click() //open a new tab/window -- popup event will be triggered
    ]);

    await page.waitForTimeout(4000);

    console.log(await newTab.title());
    console.log(newTab.url());

    //close the child window:
    await newTab.close();

    await page.waitForTimeout(4000);

    await page.bringToFront();
    console.log('parent window title: ' + await page.title());

})();