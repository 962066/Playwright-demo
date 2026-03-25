import {test,chromium} from '@playwright/test';
test('launch the browser',async()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://www.google.com/');

})