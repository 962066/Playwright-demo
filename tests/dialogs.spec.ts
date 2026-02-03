//alert(),confirm(),prompt() dailogs/JSalerts
//1. By default,dialogs are auto-dismissed by Playwright,so you don't have to handle them.
//2. However, you can register a dailog handler before the action that triggers the dialog to either
//dialog.accept() or dialog.dismiss() it.

import {test,expect,Locator} from '@playwright/test'

test('simple alert',async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/");
   page.on('dialog',(dialog)=>{
    console.log('Dialog type is',dialog.type());//returns type of the dialog
    expect(dialog.type()).toContain('alert');
    console.log('Dialog text',dialog.message());//returns message from the dialog
    expect(dialog.message()).toContain('I am an alert box')
    dialog.accept()
    });
   await page.locator('#alertBtn').click(); //Opens dialog
   await page.waitForTimeout(2000);
})

test('confirm alert',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on('dialog',(dialog)=>{
    console.log('Dialog type is',dialog.type());//returns type of the dialog
    expect(dialog.type()).toContain('confirm');
    console.log('Dialog text',dialog.message());//returns message from the dialog
    expect(dialog.message()).toContain('Press a button')
    dialog.accept()//close dialog by accepting
    //dialog.dismiss()//close dialog by dismissing
    });
   await page.locator('#confirmBtn').click(); //Opens dialog
   const text:string=await page.locator('#demo').innerText();
   console.log("Text is",text);
   //await expect(page.locator('#demo')).toHaveText('You pressed Cancel!')
   await expect(page.locator('#demo')).toHaveText('You pressed OK!')
   await page.waitForTimeout(5000);


})

test.only('prompt alert',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on('dialog',(dialog)=>{
    console.log('Dialog type is',dialog.type());//returns type of the dialog
    expect(dialog.type()).toContain('prompt');
    console.log('Dialog text',dialog.message());//returns message from the dialog
    expect(dialog.message()).toContain('Please enter your name:')
    expect(dialog.defaultValue()).toContain('Harry Potter'); //checks default value of the dialog
    dialog.accept('John')//close dialog by accepting
    //dialog.dismiss()//close dialog by dismissing
    });
   await page.locator('#promptBtn').click(); //Opens dialog
   const text:string=await page.locator('#demo').innerText();
   console.log("Text is",text);
   //await expect(page.locator('#demo')).toHaveText('You pressed Cancel!')
   await expect(page.locator('#demo')).toHaveText('Hello John! How are you today?');
   await page.waitForTimeout(5000);


})