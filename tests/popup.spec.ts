import {test,expect} from '@playwright/test'

test('pop ups',async({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Multiple popups
    await Promise.all([page.waitForEvent('popup'),await page.locator('#PopUp').click()]);

    const allPopupWindows=context.pages();
    console.log(allPopupWindows.length);

    console.log(allPopupWindows[0].url());
    console.log(allPopupWindows[1].url());

    for(const pw of allPopupWindows){
        const title=await pw.title();
        if(title.includes('Selenium')){
            await pw.locator('#selenium_webdriver').click();
            await pw.close()
        }
    }

})