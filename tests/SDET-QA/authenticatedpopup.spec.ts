import {test,expect,Page} from '@playwright/test'

test('authenticated popup',async({browser})=>{

    const context=await browser.newContext({httpCredentials:{username:'admin',password:'admin'}});
    const page=await context.newPage();

    await page.goto('https://the-internet.herokuapp.com/basic_auth');

    //await page.waitForLoadState();// wait untill the page gets loaded completely

    await expect(page.locator('text=Congratulations')).toBeVisible();

    await page.waitForTimeout(5000);

})
