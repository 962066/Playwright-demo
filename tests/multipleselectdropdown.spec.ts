import {test,expect,Locator} from '@playwright/test';

test('multi select dropdown',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //1. Select options in dropdown
    await page.locator('#colors').selectOption(['Red','Green','Blue']);//using visible text
    await page.waitForTimeout(2000);
    await page.locator('#colors').selectOption(['red','blue']);//using value attribute
    await page.waitForTimeout(2000);
    await page.locator('#colors').selectOption([{label:'Green'},{label:'Blue'}]);//using label
    await page.waitForTimeout(2000); 
    await page.locator('#colors').selectOption([{index:0},{index:2}]); //using index position
    await page.waitForTimeout(2000);

    //2. To count number of options in dropdown
    const dropdownOptions:Locator=page.locator('#colors>option'); 
    await expect(dropdownOptions).toHaveCount(7);

    //3. To check options are present in the dropdown
    const optionText:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());
    console.log("The dropdown options are:",optionText);
    expect(optionText).toContain('White');
    expect(optionText).toContain('Yellow');

    //4. Printing options from the dropdown 
    for(const option of optionText){
        console.log(option);
    }
    

})