import {test} from '@playwright/test';

test('page fixture test',async({page})=>{
    await page.goto("https://www.facebook.com/");
    const title=await page.title();
    const url=page.url();
    console.log(title)
    console.log(url)
});