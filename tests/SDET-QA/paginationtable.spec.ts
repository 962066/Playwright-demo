import {test,expect,Locator} from '@playwright/test'

test('Read data from all the table pages',async({page})=>{

   await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html');
   let hasmorepage=true;
   while(hasmorepage){
    const rows=await page.locator('#example tbody tr').all();
    for(let row of rows){
        console.log(await row.innerText());
    }

    //button[aria-label='Next']
    //button[aria-controls='example']:has-text(">")
    //button[aria-controls='example']:nth-child(9)
    const nextbutton:Locator=page.locator("button[aria-label='Next']");
    const isDisabled=await nextbutton.getAttribute('class');//dt-paging-button disabled next
    if(isDisabled?.includes('disabled')){
        hasmorepage=false;
    }
    else{
        await nextbutton.click();
    }
   }

})

test('filter the rows and check the rows count',async({page})=>{
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
    const dropdown:Locator=page.locator('#dt-length-0');
    await dropdown.selectOption({label:'25'});
    const rows=await page.locator('#example tbody tr').all();
    expect(rows.length).toBe(25);
    console.log(rows);
    await page.waitForTimeout(5000);

})
 //To search specific data from the table
test.only('searching a data from a table',async({page})=>{
    await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html')
    const searchbox:Locator=page.locator('#dt-search-0');
    await searchbox.fill('Paul Byrd')
    await page.waitForTimeout(5000);
    const rows=await page.locator('#example tbody tr').all();
    if(rows.length>=1){
        let matchfound=false;
        for(let row of rows){
            const text=await row.innerText();
            if(text.includes('Paul Byrd')){
                console.log("Record exist-found")
                matchfound=true;
                break;
            }
        }

    }
    else{
        console.log("No Rows found with search text");
    }
})