import {test} from '@playwright/test';

test("Create a lead",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("Demosalesmanager");
    await page.locator("#password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.locator("a:has-text('CRM/SFA')").click();
    await page.locator("a:has-text('Leads')").click();
    await page.locator("a:has-text('Create Lead')").click();
    await page.locator("#createLeadForm_companyName").fill("Amazon");
    await page.locator("#createLeadForm_firstName").fill("Yuvraj");
    await page.locator("#createLeadForm_lastName").fill("KM");
    await page.locator("#createLeadForm_personalTitle").fill("Mr.");
    await page.locator("#createLeadForm_generalProfTitle").fill("QA Engineer");
    await page.locator("#createLeadForm_annualRevenue").fill("1000000");
    await page.locator("#createLeadForm_departmentName").fill("Testing");
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9876543210");
    await page.locator(".smallSubmit").click();
    await page.waitForTimeout(10000);

})