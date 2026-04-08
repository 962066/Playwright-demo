import {test} from "@playwright/test";

test("Handle Windows",async({page,context})=>{
    await page.goto("https://www.leafground.com/window.xhtml");

     await page.locator('//span[text()="Open"]').click();
    let parentWindow=await context.waitForEvent('page');
    let childWindow=await parentWindow;
    const email=await childWindow.locator("#email").fill("test@example.com");
    console.log(email);
    console.log(await childWindow.title());
    await childWindow.close();
    console.log(await page.title());


})