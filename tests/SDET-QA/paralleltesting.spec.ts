import {test,expect} from '@playwright/test'

//test.describe.configure({mode:'serial'})  //command to configure for serial mode excution locally
test.describe.configure({mode:'parallel'})

test.describe('Group1',()=>{
    test('test1',async({page})=>{
        console.log("This is the test1");
    });
    test('test2',async({page})=>{
        console.log("This is the test2");
    });
    test('test3',async({page})=>{
        console.log("This is the test3");
    });
    test('test4',async({page})=>{
        console.log("This is the test4");
    });
    test('test5',async({page})=>{
        console.log("This is the test5");
    });

})