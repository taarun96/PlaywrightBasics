import { test, expect, Browser, BrowserContext, Page, chromium } from '@playwright/test';

test('test1', async ({ }) => {

    const browser: Browser = await chromium.launch({ channel: 'chrome', headless: false });
    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: { width: 800, height: 600 },
        }
    });

    const page = await context.newPage();
    await page.goto('https://support.orangehrm.com/portal/en/signin');
    await expect(page.getByRole('navigation', { name: 'Main Menu' })).toBeVisible();
});