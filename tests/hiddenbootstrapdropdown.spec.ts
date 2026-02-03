import {test,expect,Locator} from '@playwright/test';

test("Hidden Bootstrap Dropdown",async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //1. Login to the application
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();

    await page.getByText('PIM').click();

    await page.locator('form i').nth(2).click(); //Click on the dropdown icon
     await page.waitForTimeout(5000);

    //Capture all the options from the dropdown and count
    const options:Locator=page.locator('div[role="listbox"] span');
   
    const count:number=await options.count();
    console.log("The number of options in the dropdown are:",count);

    //Print all the options from the dropdown
    for(let i=0;i<count;i++){
        const optionText=await options.nth(i).innerText();
        console.log(optionText);
    }
})