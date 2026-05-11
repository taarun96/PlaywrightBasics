import test from "@playwright/test";


test('open browser test',async({page})=>{


    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.getByRole('textbox',{name:'First Name'}).fill('Taarun');
});