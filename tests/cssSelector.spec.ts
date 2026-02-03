import {test,expect,Locator} from '@playwright/test';

test('CSS Selector Test',async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');


   // 1. Using ID CSS Selector (tag#id)
  const searchbox:Locator= page.locator("#small-searchterms");
  await searchbox.fill("computer");

  await page.waitForTimeout(5000);

  // 2. Using Class CSS Selector (tag.class)
    await page.locator("input.search-box-text").fill("laptop");

    await page.waitForTimeout(5000);

    //3. Using Attribute CSS Selector (tag[attribute='value'])
    await page.locator("input[name='q']").fill("T-shirts");
    await page.waitForTimeout(5000);

    //4. tag with class and attribute (tag.class[attribute='value'])

    await page.locator("input.search-box-text[value='Search store']").fill("jeans pant")
    await page.waitForTimeout(5000);

})