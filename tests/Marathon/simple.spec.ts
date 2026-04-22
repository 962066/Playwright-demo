import{test}from'@playwright/test';
test('first marathon test',async({page})=>{
    //Launch the browser
    await page.goto('https://www.pvrcinemas.com/');
    // Selecting the requirements
    const dropdown = page.locator('.custom-dropdown');
    await page.getByRole('heading', { name: 'Chennai' }).click();
    await page.locator('//span[text()="Cinema"]').click()
    await page.locator('//span[text()="Select Cinema"]').click()
    await page.locator('//span[text()="INOX National,Virugambakkam Chennai"]').click()
    await page.locator('//span[contains(text()="Today")]').click()
    await page.locator('//span[text()="Select Movie"]').click()
    await page.locator('//span[text()="BIKER"]').click()
    await page.locator('//span[text()="Select Timing"]').click()
    await page.locator('//span[contains(text()="02:40 PM")]').click()
    //accept the popup
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