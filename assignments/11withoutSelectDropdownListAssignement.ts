import { Browser, chromium, firefox, webkit, Locator, Page, selectors, expect } from "@playwright/test";

//IIFE
(async () => {

    //selectors.setTestIdAttribute('data-testid');

    let browser: Browser = await chromium.launch(
        {
            headless: false,
            channel: 'chrome',
        });
    let page: Page = await browser.newPage();
    await page.goto('https://react-select.com/home#getting-started');

    // await page.locator(`//div[@class='select-trigger']//span[text()='Choose your preferred programming language']`).click();
    // await page.getByText('Java', { exact: true }).click();

    // await page.locator(`//div[@class='select-trigger']//span[text()='Choose your preferred web framework']`).click();
    // await page.getByText('Angular', { exact: true }).click();

    // await page.locator(`//div[@class='select-trigger']//span[text()='Select your experience level']`).click();
    // await page.getByText('Mid-level (4-6 years)').click();

    await selctValue(page, 'Ocean', 'Green');
 

})();

async function selctValue(page: Page, dropDownLabel: string, value: string): Promise<void> {
    await page.locator(`//div[@class='basic-single css-b62m3t-container']//div[@class='select__input-container css-19bb58m']//input[@class='select__input']`).click();
    await page.getByText(`${value}`, { exact: true }).click();
}