import{test}from'@playwright/test';
test('first marathon test',async({page})=>{
    //Launch the browser
    await page.goto('https://www.pvrcinemas.com/');
    // Selecting the requirements
    const dropdown = page.locator('.custom-dropdown');
    await page.getByRole('heading', { name: 'Chennai' }).click();
    await page.locator('//span[text()="Cinema"]').click();
    await page.locator('(//div[@class="p-dropdown-trigger"])[2]').click();
    await page.locator('//span[text()="INOX National,Virugambakkam Chennai"]').click();
    await page.locator('(//li[@class="p-dropdown-item"])[1]').click();
    await page.locator('(//li[@class="p-dropdown-item"])[1]').click();
    await page.locator('(//li[@class="p-dropdown-item"])[1]').click();
    await page.locator('//li[@class="p-dropdown-item"]').click()
    //accept the popup
    await page.locator('//button[@type="submit"]').click();

    await page.getByRole('button', { name: 'Submit' }).click();
    page.on('dialog', dialog => {       
        console.log(dialog.message());
        dialog.accept();
    });
    //selecting the seat
    await page.locator("//span[text()='SILVER (155.76 + GST)']").click();
    await page.getByText('7').click();
    //Print the Ticeket details
    let movieName = await page.getByRole('heading', { name: 'KAALIDAS 2' }).textContent();
    console.log(movieName);
    let seatNumber = await page.getByText('7').textContent();
    console.log(seatNumber);
    let totalPrice = await page.getByText('Grand Total').textContent();
    console.log(totalPrice);
    //Proceed to book
   await page.getByRole('button', { name: 'Proceed' }).click();
   await page.locator("//tagname[text()='Proceed']").click()
   console.log(document.title);
  })