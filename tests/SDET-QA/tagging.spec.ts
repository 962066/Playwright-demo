/*
test1 -> Sanity
test2 -> Regression,Sanity
test3 -> Sanity

1.to run only sanity;;;

npx playwright test tagging.spec.ts --grep "@sanity"

2.to run only regression;;;
npx playwright test tagging.spec.ts --grep "@regression"

3.to run both sanity and regression

npx playwright test tagging.spec.ts --grep "(?=.*@sanity)(?=.*@regression)"

4.to run the test which either belongs to sanity/regression

npx playwright test tagging.spec.ts --grep "(?=.*@sanity)|(?=.*@regression)"

5. Run sanity tests which are not belongs to regression

npx playwright test tagging.spec.ts --grep "@sanity" --grep invert "@regression"





*/
import {test,expect} from '@playwright/test'

//approach 1
test("@sanity @regression Check title of the home page",async({page})=>{
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle('Google');
}) 

//approach 2 preferred
test("Check title of the home page",{tag:'@sanity'},async({page})=>{
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle('Google');
}) 

test("Check title of the home page",{tag:'@regression'},async({page})=>{
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle('Google');
}) 

//to have multiple tags in one test
test("Check title of the home page",{tag:['@regression','@sanity']},async({page})=>{
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle('Google');
}) 