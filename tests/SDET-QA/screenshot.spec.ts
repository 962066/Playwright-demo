import {test,expect,Locator} from '@playwright/test'

test('screenshot demo',async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');
    const timestamp=Date.now();
    //page screenshot
    await page.screenshot({path:'Screenshot/'+'homepage'+timestamp+'.png'});

    //full page screenshot
    await page.screenshot({path:'Screenshot/'+'homepage'+timestamp+'.png',fullPage:true});

    ssss
    //Specific element screenshot and specific section
    const logo=page.locator("img[alt='Tricentis Demo Web Shop']");
    logo.screenshot({path:'Screenshot/'+'logo'+timestamp+'.png'});

})