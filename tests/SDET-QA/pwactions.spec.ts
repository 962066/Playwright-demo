import {test,expect,Locator} from '@playwright/test';

test.only('pwactions Test',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

// 1. Text Input/Text Box /Input Box
    const firstname:Locator=page.locator('#name')

    await expect(firstname).toBeVisible();
    await expect(firstname).toBeEnabled();

    const maxLength=await firstname.getAttribute('maxlength') //Retuns value of maxlength attributes of the element

    expect(maxLength).toBe('15');

    await firstname.fill('Yuvraj')
    //console.log("The text content is:",await firstname.textContent());// Returns empty (it always the inner text of an element)
    const enteredvalue:string=await firstname.inputValue();
    console.log("The input value of firstname is:",enteredvalue); // Returns the value of an input
    expect(enteredvalue).toBe('Yuvraj');

    await page.waitForTimeout(2000);
})

test("Radio Button actions",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const radiomale:Locator=page.locator('#male')
    await expect(radiomale).toBeVisible();
    await expect(radiomale).toBeEnabled(); 
    expect(await radiomale.isChecked()).toBe(false);   
    await radiomale.check();
    expect(await radiomale.isChecked()).toBe(true);
    await expect(radiomale).toBeChecked();
})

test('Checkbox actions',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //1. Select specific checkbox (Sunday) using getByLabel and assert
    const sundaycheckbox:Locator=page.getByLabel('Sunday')
    await sundaycheckbox.check();
    await expect(sundaycheckbox).toBeChecked();


    //2. To capture all the checkboxes and assert each is checked
    const days:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const checkboxes:Locator[]=days.map(index=>page.getByLabel(index));
    expect(checkboxes.length).toBe(7);
    await page.waitForTimeout(2000);

    //3. To check all the checkboxes using a loop
    for(const checkbox of checkboxes){
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }
    

    //4. to  uncheck specific checkbox and assert
    for(const checkbox of checkboxes.slice(-3)){ //slicing last 3 checkboxes){
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
    }
    await page.waitForTimeout(2000);

    //5. Toggle checkbox (check if unchecked else uncheck)
    for(const checkbox of checkboxes){
      if(await checkbox.isChecked()){
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
        }
        else{
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }
    }

await page.waitForTimeout(2000);

//6. Select checkboxes randomly amd assert
const indexes:number[]=[1,3,6];
for(const i of indexes){
    await checkboxes[i].check();
    await expect(checkboxes[i]).toBeChecked();  
}
await page.waitForTimeout(2000);

//7. Select checkbox based on the label

const weekname:string='Friday';
for(const label of days){
    if(label.toLowerCase()===weekname.toLowerCase()){
        const checkbox:Locator=page.getByLabel(label);
        await checkbox.check();
        await expect(checkbox).toBeChecked();
        await page.waitForTimeout(2000);
    }
}
});


