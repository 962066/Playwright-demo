import {test,expect} from '@playwright/test'


test.describe('Group1',async()=>{
test('Test1',async()=>{
    console.log("this is test1....");
})

test('Test2',async()=>{
    console.log("this is test2...");
})
})

test.describe('Group2',async()=>{
test('Test3',async()=>{
    console.log("this is test3...");
})

test('Test4',async()=>{
    console.log("this is test4...");
}) 

})