import{test,expect,Locator} from '@playwright/test'

test('dynamictable',async({page})=>{

    await page.goto('https://practice.expandtesting.com/dynamic-table');
    const table:Locator=page.locator('table.table tbody');
    await expect(table).toBeVisible();

    //Select all the rows, then find number of rows

    const rows:Locator[]=await table.locator('tr').all();
    console.log(rows.length);
    expect(rows).toHaveLength(4);

    //Step1. For Chrome process get value of CPU load
    //Read each row to check Chrome presence
    let cpuLoad='';
    for(const row of rows){
        const processName:string=await row.locator('td').nth(0).innerText();
        if(processName==='Chrome'){
            cpuLoad=await row.locator('td:has-text("%")').innerText();//CSS Syntax
            //cpuLoad=await row.locator('td',{hasText:'%'}).innerText();//Playwright Syntax
            console.log(cpuLoad);
            break;
        }
    }

    //Step 2 : Compare the value in the yellow label
    const yellowBoxText:string =await page.locator('#chrome-cpu').innerText();
    console.log('yellowBoxText');
    if(yellowBoxText.includes(cpuLoad)){
        console.log("cpuLoad is equal");
    }else{
        console.log("cpuload not equal")
    }
    expect(yellowBoxText).toContain(cpuLoad);
    await page.waitForTimeout(5000);

})