import {test,expect,Locator} from '@playwright/test'

test('Comparing Methods', async ({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');
    const products:Locator=page.locator('.product-item');
    //1. innerText vs textContent
   // console.log(await products.nth(1).innerText());
   // console.log(await products.nth(1).textContent());
/*
   const count=await products.count();
    for(let i=0;i<count;i++){
       // const productName : string=await products.nth(i).innerText(); // Extracts plain text. Eliminates Whitespaces and line breaks.
        //console.log(productName);

        const productName : string | null =await products.nth(i).textContent(); // Includes hidden element line breaks and whitespaces
        console.log(productName?.trim()); // ? represent it can be null/string
    }*/

    //2. allInnerTexts() vs allTextContents()
    //const allProductNames1:string[]=await products.allInnerTexts();
   // console.log(allProductNames1);
/*
    const allProductNames2:string[] =await products.allTextContents();
    console.log(allProductNames2);

    const productsTrimmed:string[]=allProductNames2.map(text=>text.trim());
    console.log(productsTrimmed);
*/
//3. all() -> Converts locator into locator type of an array and return array of locators
// Returns array of locators (Stores locators of products)/Converts Locator to array of locators(for iteration)
    const productlocator:Locator[]=await products.all()
    console.log(productlocator)
    console.log(await productlocator[1].innerText());
})