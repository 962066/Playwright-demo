import {test, expect,Locator} from '@playwright/test';

test('Static table',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const table:Locator=page.locator('table[name="BookTable"] tbody');
    await expect(table).toBeVisible()

    //1. count number of rows in a table 

    const rows:Locator=table.locator("tr"); // returns all the rows including header
    await expect(rows).toHaveCount(7);//approach 1

    const rowcount:number=await rows.count();
    console.log(rowcount);
    expect(rowcount).toBe(7); // approach 2

    //2. count number of header/columns
     const columns:Locator=rows.locator('th');
    await expect(columns).toHaveCount(4);//approach 1

    const columncount:number=await columns.count();
    console.log(columncount);
    expect(columncount).toBe(4); //approach 2

    //3. Read the data from a specific
    const secondRowCells:Locator=rows.nth(2).locator('td');
    const secondRowText:string[]=await secondRowCells.allInnerTexts();
    console.log(secondRowText);
    await expect(secondRowCells).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ]);
    console.log("printing 2nd row data.....")
    for(let text of secondRowText){
        console.log(text);
    }
    //4. Read all the data from the table(excluding header)
    console.log('Printing all the table data.....');
    const allrowdata=await rows.all();//get all rows locator //all() returns array of locators
    for(let row of allrowdata.slice(1)){
        const cols=await row.locator('td').allInnerTexts();
        console.log(cols.join('\t'));
    }

    //5. To print the book name author name is mukesh
    console.log("Books written by Mukesh.....");
    for(let row of allrowdata.slice(1)){
        const cells=await row.locator('td').allInnerTexts();
        const author=cells[1];
        const book=cells[0];
        if(author==='Mukesh'){
            console.log(author,book);
        }
    }

    //6. Calculate total price of all books
    let totalPrice:number=0;
    for(let row of allrowdata.slice(1)){
        const cells=await row.locator('td').allInnerTexts();
        const price=cells[3];
        totalPrice=totalPrice+parseInt(price);
    }
    console.log("Total price:",totalPrice);
    expect(totalPrice).toBe(7100);

})