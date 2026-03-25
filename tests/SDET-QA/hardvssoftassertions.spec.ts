import {test,expect} from '@playwright/test'

test('autowaiting and forcing',async({page})=>{
await page.goto('https://demowebshop.tricentis.com/');


//Hard assertions
/*
expect(page).toHaveTitle('Demo Web Shop');
expect(page).toHaveURL('https://demowebshop.tricentis.com/');
const logo=page.locator("img[alt='Tricentis Demo Web Shop']");
await expect(logo).toBeVisible();

await page.waitForTimeout(5000);
*/

//Soft assertion
expect.soft(page).toHaveTitle('Demo Web Shop2');
expect.soft(page).toHaveURL('https://demowebshop.tricentis.com/');
const logo=page.locator("img[alt='Tricentis Demo Web Shop']");
await expect.soft(logo).toBeVisible();

await page.waitForTimeout(5000);
})