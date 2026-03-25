import {test,expect,Locator} from '@playwright/test'

test('jquery date picker',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    const datePicker:Locator=page.locator('#datepicker');
    expect(datePicker).toBeVisible();
    //approach 1 : using fill method
    //datePicker.fill('01/20/2026'); //mm/dd/yyyy , 
    
    //Approach 2 : using date picker
    await datePicker.click();
    //Select target date
    const year='2023';
    const month='July';
    const date='15';

    while(true){
        const currentMonth=await page.locator('.ui-datepicker-month').textContent();
        const currentYear=await page.locator('.ui-datepicker-year').textContent();
        if(currentMonth===month && currentYear===year){
            break;
        }
        //Futuregg
       // await page.locator('.ui-datepicker-next').click();
        //past
        await page.locator('.ui-datepicker-prev').click();
    }
    const allDates=await page.locator('.ui-datepicker-calendar td').all();
    for(let dt of allDates){
        const dateText=await dt.innerText();
        if(dateText===date){
            await dt.click()
            break;
        }

    }
    await page.waitForTimeout(5000);

})