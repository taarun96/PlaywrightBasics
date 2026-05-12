import { Browser, chromium, Page, BrowserContext, Locator } from "@playwright/test";

(async () => {
    const browser: Browser = await chromium.launch({
        headless: false,
        channel: 'chrome'
    });
    const page: Page = await browser.newPage();
/*
    // 1. Single File Upload
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator('#filesToUpload').setInputFiles('auth.json');
    await page.waitForTimeout(3000);
    // De-select the file:
    await page.locator('#filesToUpload').setInputFiles([]);

    // 2. Multiple File Upload
    // Note: The 'multiple' attribute must be present in the HTML for this to work
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator('#filesToUpload').setInputFiles([
        'tests/resources/test1.txt',
        'tests/resources/test2.txt',
        'tests/resources/test3.txt'
    ]);
    await page.waitForTimeout(3000);
    await page.locator('#filesToUpload').setInputFiles([]);
*/
    // 3. Dynamic File Upload (Creating a file in memory)
    // Useful for cases where you don't want to maintain physical files in your workspace
    await page.goto('https://practice.expandtesting.com/upload');
    await page.locator('#fileInput').setInputFiles([
        {
            name: 'resume.txt',
            mimeType: 'text/plain',
            buffer: Buffer.from('this is my resume content')
        }
    ]);
    await page.locator('#fileSubmit').click();

    console.log('File upload tests completed');



    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator('#filesToUpload').setInputFiles([{
        name: 'resume.txt',
        mimeType: 'text/plain',
        buffer: Buffer.from('Naveen resume for test automation'),
    },
    {
        name: 'drawio.png',
        mimeType: 'image/png',
        buffer: Buffer.from('Naveen resume for test automation'),
    }]);
})();