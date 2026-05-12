
import { Browser, chromium, firefox, webkit, Locator, Page, selectors, expect } from "@playwright/test";

(async()=>{

    let browser:Browser= await chromium.launch({
        headless:false,
        channel:'chrome'
    });

    let page:Page= await browser.newPage();

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    await page.getByRole('checkbox').check();

    await page.getByRole('button',{name:'Continue'}).click();

    let firstNameError:string=await page.getByText('First Name must be between 1 and 32 characters!').innerText();

    expect(firstNameError)
    .toBe('First Name must be between 1 and 32 characters!');
console.log(firstNameError);


await page.close();


})();