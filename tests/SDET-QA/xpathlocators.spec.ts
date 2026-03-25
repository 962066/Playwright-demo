import {test,expect,Locator} from '@playwright/test';

test('XPATH Locators in Playwright',async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');

    //1. Absolute XPATH - starts from the root element and follows the entire hierarchy to locate the element
    const absolutelogo:Locator= page.locator('//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]');
    await expect(absolutelogo).toBeVisible();

    //2. Relative XPATH - starts from anywhere in the document and is more flexible
    const relativelogo:Locator= page.locator('//img[@alt="Tricentis Demo Web Shop"]');
    await expect(relativelogo).toBeVisible();

    //3. Contains() Method

   const products:Locator= page.locator("//h2/a[contains(@href,'computer')]");
   const productsCount: number = await products.count()
   console.log("Number of products found: " ,productsCount);
   expect(productsCount).toBeGreaterThan(0);

   //console.log(await products.textContent()); Strict mode voilation error

   console.log("My First Product is:",await products.first().textContent());

   console.log("My Last Product is:", await products.last().textContent());

   console.log("My Nth Product is:", await products.nth(0).textContent()); //Index will start from 0 (Zero)

  let productTiltes:string[]=await products.allTextContents(); // getting all matched products into an array

  for(let pt of productTiltes){
    console.log(pt);
  }

  //4. Starts with() Method
  const buildingProducts:Locator=page.locator("//h2/a[starts-with(@href,'/build')]");
  const count=await buildingProducts.count();
  expect(count).toBeGreaterThan(0);


  //5. Text() Method
 const reglink:Locator= page.locator("//a[text()='Register']")
 await expect(reglink).toBeVisible();

 //6 . last() Method
 const lastelement:Locator=page.locator("//div[@class='column follow-us']//li[last()]")
 await expect(lastelement).toBeVisible();
 console.log("ast element is:",await lastelement.textContent());

 //7. Position item()
  const positionelement:Locator=page.locator("//div[@class='column follow-us']//li[position()=3]");
  await expect(positionelement).toBeVisible();
  console.log("Position element is:",await positionelement.textContent());


})