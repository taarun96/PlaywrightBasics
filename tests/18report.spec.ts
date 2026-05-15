import { test, expect } from '@playwright/test';

test('title test', async ({ page, browserName }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    
    // Intentionally failing the title to trigger the retry mechanism
    // The correct title is 'Account Login'
    await expect(page).toHaveTitle('Account Login11');
});