import { test, expect, Locator } from '@playwright/test';

test('multiple selection', async ({ page }) => {
    test.slow();
    await page.goto('https://selectorshub.com/xpath-practice-page/');

    while (true) {
        let allEles = await page.locator("//td[text()='India']/preceding-sibling::td/input[@type='checkbox']").all();
        if (allEles.length > 0) {
            for (let e of allEles) {
                await e.click();
            }
        }

        //pagination logic : click on next icon:
        let next = page.getByRole('link', { name: 'Next' });
        if (await next.isDisabled()) {
            console.log('pagination is over...');
            break;
        }

        await next.click();
    }

    await page.pause();
});

});