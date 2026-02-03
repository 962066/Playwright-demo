import {test,expect,Locator} from '@playwright/test';

test('Auto suggest dropdown',async({page})=>{
    await page.goto("https://www.flipkart.com/");
    await page.locator("input[name='q']").fill("smart")//Search text
    await page.waitForTimeout(5000);

    //Get all the suggested options --> Ctrl+shift+P on DOM --> emulated a focused page
    const options:Locator=page.locator('ul>li');
    const count=await options.count();
    console.log("The number of suggestions are:",count);  //Note: The values are constant it differes from time to time
    console.log("5th option is:",await options.nth(4).innerText());
//Printing all the suggested options
    for(let i=0;i<count;i++){
        const optionText=await options.nth(i).innerText();// we can also use textContent() method as well here
        console.log(optionText);
    }
//Select/click on the smartphone option
for(let i=0;i<count;i++){
        const text=await options.nth(i).innerText();
        if(text==='smartphone'){
            options.nth(i).click();
            break;      
        }
}

})