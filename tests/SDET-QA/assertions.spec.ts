import {test,expect} from '@playwright/test'

test('autowaiting and forcing',async({page})=>{
await page.goto('https://demowebshop.tricentis.com/');

     //assertions-Auto-retrying assertions (automatically retries untill it passes or times out)
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/');

    //Non-Retrying assertions (executes immediately, no retry)
    const title=await page.title();
    expect(title.includes('Demo Web Shop')).toBeTruthy();//no auto-retry

    //Negating matcher(applicable for both auto-retry and non-retry assertions)
    await expect(page.locator('text=Welcome to our store')).not.toBeVisible();



})