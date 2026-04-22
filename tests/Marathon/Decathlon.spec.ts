import {test,expect} from "@playwright/test"

test("Decathlon",async({page})=>{
    await page.goto("https://www.decathlon.in/");
    console.log("The title of the page is",await page.title());
    expect(page).toHaveTitle("Buy Sporting Goods, Sportswear and Equipments | Download App");
    await page.locator('(//div[contains(@class,"flex items-center")])[4]').click();
    await page.getByPlaceholder("Search for 60+ sports and 6000+ products").clear();
    await expect(page.getByPlaceholder("Search for 60+ sports and 6000+ products")).toBeEnabled();
    await page.getByPlaceholder("Search for 60+ sports and 6000+ products").fill("Shoes");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(5000);
    const title=await page.title();
    console.log("The title of this page is",title);
    expect(title).toBe("Search | Shoes");
    await page.locator('//span[contains(text(),"Running")]').click();
    await page.locator('//span[contains(text(),"Men")]').click();
    await page.locator('//span[contains(text(),"Uk 10.5")]').click();
    await page.locator('//span[text()="Most Relevant"]').click();
    await page.locator('//a[text()="Price: High to Low"]').click();
    await page.locator('(//p[text()="Men Running Shoes Superior Grip Cushioned Upto 20km/week, Jogflow 190.1 - Blue"])[1]').click();
    await page.locator('//div[contains(text(),"UK 10.5")]').click();
    await page.locator('//span[text()="ADD TO CART"]').click();
    const message=page.locator('//div[@class="flex-col"]');
    await expect(message).toHaveText("Product added to cart");
    await page.locator('//p[text()="Cart"]').click();
    await page.getByTestId("cart:cart-checkout-total-cart-value")
    const cartTotal=('(//p[@classname="font-semibold"][2])');
    //expect(cartTotal).toBe("₹2,499");
    console.log("The total amount in the cart is",cartTotal);
})