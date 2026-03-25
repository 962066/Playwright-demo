import {test,expect,Page,chromium} from '@playwright/test'

//Browser-->Context --->Pages
//Browser--> chromium, firefox , webkit
//Contexts--> we can have multiple contexts for multiple users/apps for the same browser
            //provide a way to operate multiple independent browser sessions
//page-->Tab,window,popup

test('Browser context demo',async()=>{
    const browser=await chromium.launch(); //create browser
    const context=await browser.newContext();//.create context
    //creating 2 pages
    const page1=await context.newPage();
    const page2=await context.newPage();
    console.log(context.pages().length);
    await page1.goto('https://testautomationpractice.blogspot.com/');
    await expect(page1).toHaveTitle('Automation Testing Practice');
    await page1.waitForTimeout(5000);
    await page2.goto('https://demowebshop.tricentis.com/');
    await expect(page2).toHaveTitle('Demo Web Shop');
    await page2.waitForTimeout(5000);
})