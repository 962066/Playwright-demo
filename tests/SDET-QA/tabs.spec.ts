import {test,expect,chromium} from '@playwright/test'

test('multiple tabs',async()=>{
    const browser=await chromium.launch(); //create browser
    const context=await browser.newContext();//.create context
    const page1=await context.newPage();
    
    await page1.goto('https://testautomationpractice.blogspot.com/');

    //2 statements should go parallely
    //context.waitforEvent('page');//pending,fulfilled,rejected
    //page1.Locator("button:has-text('New Tab')").click();//opens new tab/new page
    const[childpage]=await Promise.all([context.waitForEvent('page'),page1.locator("button:has-text('New Tab')").click()]);

    //Approach 1 : switch between pages and get titles
    const pages=context.pages();
    console.log(pages.length);
    console.log(await pages[0].title());
    console.log(await pages[1].title());
    await page1.waitForTimeout(5000);

})