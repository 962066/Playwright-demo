import {test,expect} from '@playwright/test';

test('ServiceNow',async({page,context})=>{
    await page.goto('https://dev280319.service-now.com/navpage.do');
    await page.locator('#user_name').fill('admin');
    await page.locator('#user_password').fill('YApVc0-vyN5-');
    await page.locator('#sysverb_login').click();
    //await page.getByAltText("ServiceNow Service Management")
    await page.getByRole('menuitem',{name:"All"}).click();
    await page.locator("span[class='label']").nth(3).click()
    const frames=page.frames();
    console.log(frames.length);
    const catlog = page.frameLocator("iframe")
    await catlog.getByAltText("Mobiles").click();
    await catlog.locator('//strong[text()="Apple iPhone 13 pro"]').click();
    await catlog.locator('//label[text()="Yes"]').click();
    await catlog.locator('//select[@class="form-control cat_item_option "]').selectOption({value:"unlimited"});
    await catlog.locator('//label[text()="Alpine Green"]').click();
    await catlog.locator('//input[@class="cat_item_option sc-content-pad form-control"]').fill("12345")
    await catlog.locator('//label[contains(text(),"512 GB")]').click();
    await catlog.locator('//button[text()="Order Now"]').click();
    const confirmMsg=catlog.locator('//span[contains(text(),"Thank you, your request")]');
    await expect(confirmMsg).toBeVisible();
    const timestamp=Date.now();
    await page.screenshot({path:'Screenshot/'+'OrderSummary'+timestamp+'.png',fullPage:true});

})