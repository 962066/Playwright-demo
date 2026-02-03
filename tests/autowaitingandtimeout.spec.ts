import {test,expect} from '@playwright/test'

test('autowaiting and forcing',async({page})=>{

    //test.setTimeout(50000);//50 sec
    test.slow();//90 sec  (Default is 30 sec), it basically thrible the timeouts

    await page.goto('https://demowebshop.tricentis.com/');

     //assertions-Auto wait works , default time is 5s
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/',{timeout:10000});
    await expect(page.locator('text=Welcome to our store')).toBeVisible({timeout:10000});

  //Actions-Auto wait works , default time is 30s
    await page.locator('#small-searchterms').fill('shirts',{force:true});//Force action -> Will not perform any actionability checks
    await page.locator('.button-1.search-box-button').click({force:true});

    await page.waitForTimeout(4000);

})