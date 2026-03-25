import{test,expect,Locator} from '@playwright/test';

test('Duplicate dropdown options',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const dropdownOptions:Locator=page.locator('#colors>option'); //having duplicates
   //onst DropDownOptions:Locator=page.locator('#animals>option'); // not having duplicates

   const optionText:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim())
   const myset=new Set<string>();
   const duplicates:string[]=[];

   for(const option of optionText){
        if(myset.has(option)){
            duplicates.push(option);
        }else{
            myset.add(option);
        }
   }
    console.log("The duplicate options in the dropdown are:",duplicates);
    if(duplicates.length>0){
        console.log("The dropdown has duplicate options",duplicates);
    }else{
        console.log("The dropdown has no duplicate options");
        }
    expect(duplicates.length).toBe(0);

})