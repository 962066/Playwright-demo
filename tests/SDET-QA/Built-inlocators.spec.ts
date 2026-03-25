import {test,expect,Locator} from '@playwright/test';
test('Playwright locators',async({page})=>{

    await page.goto('https://demo.nopcommerce.com/');

    //1. page.getByAltText() - identifies images (and similar elements) based on the alt attribute
    // use this locator when your element supports alt text such as images and area elements 
    const logo:Locator=page.getByAltText('nopCommerce demo store')
    await expect(logo).toBeVisible();


    //2. page.getByText() - Find an element by the text it contains. You can match by a substring , exact string
    //Locate by visible text 
    //Use this locator to find non interactive element such as div,span,p etc
    //For interactive elements like buttons, a ,input,etc use role locators
    const text:Locator=page.getByText('Welcome to our store')
    await expect(text).toBeVisible();
   // await expect(page.getByText('Welcome to our store')).toBeVisible(); full string
    //await expect(page.getByText('Welcome to')).toBeVisible(); substring
    //await expect(page.getByText(/Welcome\s+To\s+Our\s+Store/i)).toBeVisible(); regular expression

//3.page.getByRole()- Locating by Role (Role is not an Attribute) Role is defined based on the element type
/*Role locators include buttons,checkboxes,headings,links,lists,tables and many more
and follow W3C specifications for ARIA role.
Prefer for interactive elements such as buttons, checkboxes,links,lists,headings,tables, etc
*/

    await page.getByRole('link',{name:'Register'}).click(); 
    await expect(page.getByRole('heading',{name:'Register'})).toBeVisible();


//4. page.getByLabel()-Locate form control by label's text 
//When to use: Ideal for form fields like input,textarea,select that are associated with a label element
    await page.getByLabel('First name').fill('John');
    await page.getByLabel('Last name').fill('Wick');
    await page.getByLabel('Email').fill('abc@gmail.com');

//5. page.getByPlaceholder()- Finds element with a given placeholder text.
//Best for inputs without a label but having a placeholder attribute
    await page.getByPlaceholder('Search store').fill('Apple MacBook Pro 13-inch');

//6. page.getByTitle()- Locate element by title attribute
//When to use: Useful when elements have a title attribute that provides additional information about the element

/*
    await page.goto('file:///C:/Users/pavan/OneDrive/Desktop/playwrightlocators.html');
    await expect(page.getByTitle('Home page link')).toHaveText('Home');
    await expect(page.getByTitle('HyperText Markup Language')).toHaveText('HTML');
*/

//7. page.getByTestId()- Locate element by data-testid attribute(other attributes can be configured in playwright.config.ts)
//When to use: Best for elements that have a unique data-testid attribute specifically added for testing purposes

  //await expect(page.getByTestId('profile-name')).toHaveText('John Wick');
  //await expect(page.getByTestId('profile-email')).toHaveText('johnwick@gmail.com');


})