import { test, expect } from '@playwright/test';

test('check page title', async ({ page }) => {
    await page.goto('https://www.google.com');
    let title:string = await page.title();
    console.log('Page title is:', title);
    await expect(title).toBe('Google');
});


test('check page logo', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    expect(await page.getByTitle('naveenopencart').count()).toBe(2);
})