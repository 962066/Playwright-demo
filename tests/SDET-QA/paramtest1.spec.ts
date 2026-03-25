import {test,expect,Locator} from '@playwright/test'

//testdata --> Approach 1
const searchitems:string[]=['laptop','Gift card','Smartphone','soap'];
/*
for(const items of searchitems){
test(`search test for ${items}`,async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator('#small-searchterms').fill(items);
    await page.locator('.button-1.search-box-button').click();
    await expect(page.locator('h2 a').nth(0)).toContainText(items,{ignoreCase:true});
})

}
*/

//Approach 2 , using foreach function
searchitems.forEach((item)=>{
test(`search test for ${item}`,async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator('#small-searchterms').fill(item);
    await page.locator('.button-1.search-box-button').click();
    await expect(page.locator('h2 a').nth(0)).toContainText(item,{ignoreCase:true});
});
})