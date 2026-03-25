/*
3 ways to create trace file(.zip)
---------------------------------
1) using playwright.config.ts
2) using command 
                npx playwright test mytest.spec.ts --trace on
3) code(programitically)

context.trace.start({screenshot:true,snapshots:true});
//context.tracing.stop({path:'trace.zip'});

To view trace file (3 ways)

---------------------------
1)from html file click on trace.zip
2)through command - npx playwright show-trace trace.zip
3) utility -> https://trace.playwright.dev/ (drag and drop the file trace.zip file)