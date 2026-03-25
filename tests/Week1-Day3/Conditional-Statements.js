function launchBrowser(browserName){
    if(browserName=="chrome"){
        console.log("Chrome browser is launched");
    }
    else{
        console.log("Browser launched is not chrome");
    }

}
function runTests(testType){
    switch(testType){
        case "smoke":
            console.log("Smoke Test Running");
            break;
        case "regression":
            console.log("Regression Test Running");
            break;
        case "sanity":
            console.log("Sanity Test Running");
            break;  
        default:
            console.log("Smoke test is running");
    }

}
launchBrowser("Firefox");
runTests();