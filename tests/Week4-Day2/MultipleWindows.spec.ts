import {test,expect} from "@playwright/test";

test("Handle Multiple Windows",async({page,context})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator('#username').fill("Demosalesmanager");
    await page.locator('#password').fill("crmsfa");
    await page.locator('.decorativeSubmit').click();
    await page.locator('//div[@id="label"]').click();
    await page.locator('//a[text()="Leads"]').click();
    await page.locator('//a[text()="Merge Leads"]').click();
    const [firstWindow]=await Promise.all([context.waitForEvent('page'),page.locator('(//img[@alt="Lookup"])[1]').click()]);
    const allPages=firstWindow.context().pages();
    console.log(allPages.length);
    let findLeads:any;
    let findLeads1:any;
    for(let i=0;i<allPages.length;i++){
        const title=await allPages[i].title();
        console.log(title);
        if(title==="Find Leads"){
            findLeads=allPages[i];
            await findLeads.locator('(//a[@class="linktext"])[1]').click();
        }
    }
    const [secondWindow]=await Promise.all([context.waitForEvent('page'),page.locator('(//img[@alt="Lookup"])[2]').click()]);
    const allPages1=secondWindow.context().pages();
    console.log(allPages1.length);
    for(let i=0;i<allPages1.length;i++){
        const title=await allPages1[i].title();
        console.log(title);
        if(title==="Find Leads"){
            findLeads1=allPages1[i];
            await findLeads1.locator('(//a[@class="linktext"])[6]').click();
        }
    }
    page.on('dialog',async(alert)=>{
        const alertMessage=alert.message();
        console.log(alertMessage);
        const alertType=alert.type();
        console.log(alertType);
        if(alertType==="confirm"){
            await alert.accept();
        }else{
            console.log("Invalid Alert");
        }
    })
    await page.locator('//a[text()="Merge"]').click();
    const title=await page.title();
    console.log(title);
    expect(title).toBe("View Lead | opentaps CRM");

})