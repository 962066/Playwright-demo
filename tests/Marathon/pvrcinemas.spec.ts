import {test,expect} from "@playwright/test"

test("PVR Cinemas",async({page})=>{

    await page.goto("https://www.pvrcinemas.com/");
    await page.locator('(//img[@alt="map"])[2]').click();
    await page.locator(('//span[text()="Chennai"]')).click();
    await page.locator('//span[text()="Cinema"]').click();
    await page.locator('(//div[@class="p-dropdown-trigger"])[2]').click();
    await page.locator('(//li[@class="p-dropdown-item"])[1]').click();
    await page.locator('(//li[@class="p-dropdown-item"])[1]').click();
    await page.locator('(//li[@class="p-dropdown-item"])[1]').click();
    await page.locator('(//li[@class="p-dropdown-item"])[1]').click();
    await page.locator('//button[@type="submit"]').click();
    await page.locator('//button[text()="Accept"]').click();
    await page.locator('//span[@id="SL.SILVER|C:10"]').click();
    const seatInfo= page.locator('//div[@class="seat-info"]');
    console.log("The seat number is",await seatInfo.innerText());
    const totalAmount=page.locator('//div[@class="grand-prices"]');
    await expect(totalAmount).toHaveText("218.02");
    const pageTitle=await page.title();
    console.log("The title of the page is",pageTitle);
    expect(pageTitle).toBe("PVR Cinemas");
    await page.locator('//div[@class="register-btn"]').click();

})