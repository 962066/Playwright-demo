import {test,expect,Locator} from '@playwright/test';

test('Single select dropdown',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //1. Select option from the dropdown

    await page.locator('#country').selectOption('India'); //visible text 
    await page.waitForTimeout(2000);
    await page.locator('#country').selectOption({value:'uk'}); //value attribute
    await page.waitForTimeout(2000);
    await page.locator('#country').selectOption({label:'United States'}); //label
    await page.waitForTimeout(2000); 
    await page.locator('#country').selectOption({index:5}); //index position 
    await page.waitForTimeout(2000);

    //2. To check number of options in dropdowns
    const dropdownOptions:Locator=page.locator('#country>option'); 
    await expect(dropdownOptions).toHaveCount(10);

    //3. To check specific option is present in dropdown or not
   const optionText:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());
   console.log("The dropdown options are:",optionText);
    expect(optionText).toContain('Japan');

    //4/ Printing options from the dropdown
        for(const option of optionText){
        console.log(option);
    }   

})