#import "/Users/songxiang/Desktop/monkey/lib/tuneup_js/tuneup.js"
var target = UIATarget.localTarget(); 
var app = target.frontMostApp();  
test("Second", function(target, app) { 
var window = app.mainWindow(); 
window.navigationBar().tap();
window.navigationBar().buttons()["杂志"].tap();
window.navigationBar().buttons()[3].tap();
window.navigationBar().buttons()["取消"].tap();
});

