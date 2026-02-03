//iframe (short for "inline frame") is an HTML element that allows you to embed another HTML document within the current document.
//Iframes are commonly used to embed external content such as videos ,maps, or other web pages (as seen here)into a webpage without affecting the parent document.

import {test,expect,Locator} from '@playwright/test'
test('frames',async({page})=>{
await page.goto("https://ui.vision/demo/webtest/frames/");

//total number of frames present on the webpage
const frames=page.frames();
console.log("Number of frames:",frames.length);

//---Approach 1 using page.frame()---
const frame=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
if(frame){
    frame.locator("[name='mytext1']").fill("Hello");//Approach 1   
}
else{
    console.log("frame is not available");
}
await page.waitForTimeout(5000);

//---Approach 2 : Using FrameLocator
const inputbox=page.frameLocator("[src='frame_1.html']").locator("[name='mytext']");

await inputbox.fill("john");
})

test.only('inner child frames',async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame3=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    if(frame3){
        await frame3.locator("[name='mytext3']").fill("welcome");
        const childFrames=frame3.childFrames();
        console.log(childFrames.length);
        const radio=childFrames[0].getByLabel('I am a human');
        radio.check();//select radio button
        await expect(radio).toBeChecked();//assertion
    }
    else{
        console.log("frame 3 is not found");
    }
    await page.waitForTimeout(5000);


})