import {test,expect,Locator} from'@playwright/test';

test('sorted dropdown',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //1. To capture all the options from dropdown
    const DropDownOptions:Locator=page.locator('#animals>option');
    const optionText:string[]=(await DropDownOptions.allTextContents()).map(text=>text.trim());
    const originalList:string[]=[...optionText];
    const sortedList:string[]=[...optionText].sort();

    console.log("The original list is:",originalList);
    console.log("The sorted list is:",sortedList);
    expect(originalList).toEqual(sortedList); //assertion to check dropdown is sorted or not

})

