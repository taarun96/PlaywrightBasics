import { test, expect } from '@playwright/test';

test('test1', async ({ page }) => {
    await page.goto('https://support.orangehrm.com/portal/en/signin');
    await expect(page.getByRole('navigation', { name: 'Main Menu' })).toBeVisible();

    await page.getByRole('link', { name: 'Login here' }).click();
    await page.goto('https://support.orangehrm.com/portal/en/signin');
    await page.locator('#iamFrame').contentFrame().getByRole('textbox', { name: 'Email Address1' }).click();
});

test('test2', async ({ page }) => {
    await page.goto('https://support.orangehrm.com/portal/en/signin');
    await expect(page.getByRole('navigation', { name: 'Main Menu' })).toBeVisible();

    await page.getByRole('link', { name: 'Login here' }).click();
    await page.goto('https://support.orangehrm.com/portal/en/signin');
    await page.locator('#iamFrame').contentFrame().getByRole('textbox', { name: 'Email Address1' }).click();
});


test('test3', async ({ page }) => {
    await page.goto('https://support.orangehrm.com/portal/en/signin');
    await expect(page.getByRole('navigation', { name: 'Main Menu' })).toBeVisible();

    await page.getByRole('link', { name: 'Login here' }).click();
    await page.goto('https://support.orangehrm.com/portal/en/signin');
    await page.locator('#iamFrame').contentFrame().getByRole('textbox', { name: 'Email Address' }).click();
});