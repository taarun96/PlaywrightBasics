import { test, expect, Locator } from '@playwright/test';

test('title test', async ({ page, browserName }) => {
    //test.skip(browserName === 'firefox', 'Feature is not supported in Firefox');
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page).toHaveTitle('Account Login');
});

test.fixme('url test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page).toHaveURL(/.*account\/login.*/);
});

test('header is visible', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page.getByText('Returning Customer', { exact: true })).toBeVisible();
});

// Lines 33-37: Expected failure test demonstration
test('new customer header is visible', async ({ page }) => {
    test.fail(); 
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page.getByText('New Customer11', { exact: true })).toBeVisible();
});

// Calendar Selection Logic (referenced in session activity)
test('calendar date selection', async ({ page }) => {
    await page.goto('https://seleniumpractise.blogspot.com/2016/08/how-to-handle-calendar-in-selenium.html');
    await page.locator('#datepicker').click();

    let expectedMonthYear = 'April 2026';
    
    while (true) {
        let currentMonthYear = await page.locator('div.ui-datepicker-title').textContent();
        if (currentMonthYear?.trim() === expectedMonthYear) {
            await page.getByText('17', { exact: true }).click();
            break;
        }
        await page.getByText('Next', { exact: true }).click();
    }
});