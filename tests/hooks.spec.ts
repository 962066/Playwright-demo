import {test,expect} from '@playwright/test'

test.beforeAll('BeforeAll',async()=>{
    console.log("This is before all")
})

test.afterAll('AfterAll',async()=>{
    console.log("This is After all")
})

test.beforeEach('Beforeeach',async()=>{
    console.log("This is before each")
})

test.afterEach('Aftereach',async()=>{
    console.log("this is after each")
})

test('Test1',async()=>{
    console.log("this is test1....");
})

test('Test2',async()=>{
    console.log("this is test2...");
})

test('Test3',async()=>{
    console.log("this is test3...");
})

test('Test4',async()=>{
    console.log("this is test4...");
}) 