/*
only  -> Executes only the specific tests
skip  -> Skips the test
fail  -> Used to fail the test intentionally
fixme -> If the test is partially completed then we can use this annotation , this annotation basically skip the tests
slow  -> The default time 30 seconds , but when we use this annotation it will thrible the execution time
*/

import {test,expect} from '@playwright/test'

test("test1",async({page})=>{
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle('Google');
})

//we can also skip the test based on certain condition
test("test2",async({page,browserName})=>{
    test.skip(browserName==='chromium');
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle('Google');
})

test.skip("test3",async({page})=>{
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle('Google');
})

test.fail("test4",async({page})=>{
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle('Google');
})

test.fixme("test5",async({page})=>{
    await page.goto("https://www.google.com");
    
})

test("test6",async({page})=>{
    test.slow();
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle('Google');
})