import { Browser,chromium,Page } from '@playwright/test';
import { channel } from 'node:diagnostics_channel';

(async()=>{
   let browser:Browser = await chromium.launch({ headless: false ,channel: 'chrome'});

    let page:Page = await browser.newPage();

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

let title:string = await page.title();
    console.log('page title : ' + title);

    let url: string = await page.url();
    console.log(url);
    let emailId=page.locator('#input-email');
    await emailId.fill('taarun96@gmail.com');
    await page.close();
})

();
