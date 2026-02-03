import{test,expect,Locator} from '@playwright/test';
test('Dynamic Xpath',async({page})=>{

  await page.goto('https://testautomationpractice.blogspot.com/')

  //loop to check the button 5 times
    for(let i=1;i<5;i++){
        let button:Locator=page.locator("//button[text()='STOP' or text()='START']");
        await button.click();
        //waiting for 2 seconds
        await page.waitForTimeout(2000);
    
    }

});