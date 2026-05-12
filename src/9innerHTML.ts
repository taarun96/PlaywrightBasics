import { Browser, chromium, firefox, webkit, Locator, Page, selectors } from "@playwright/test";

//IIFE
(async () => {

    let browser: Browser = await chromium.launch(
        {
            headless: false,
            channel: 'chrome',
        });
    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let headerHtml = await page.getByRole('heading', { name: 'Register Account' }).innerHTML();
    console.log(headerHtml);

    // <h1>Register Account</h1>

    let firstNameHtml = await page.locator('#input-firstname').innerHTML();
    console.log(firstNameHtml); //nothing

    // <input type="text" name="firstname" value="" placeholder="First Name" id="input-firstname" class="form-control">

    let formHtml = await page.locator('form.form-horizontal').innerHTML();
    console.log(formHtml);



    console.log('bye!!!');

    await page.close();

})();