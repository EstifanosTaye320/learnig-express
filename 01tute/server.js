// From this point onward it would be best if you knew something of the following
// Basics of JS, CSS, HTML
// Knowledge of React, Vue ..... Basics

// Node js and Browser differences
// 1) Node runs on a server and not on a Browser
// 2) The console is now in terminal and not in browser debug tools console
console.log("Hello World");
// 3) Global object inplace of window and document that are avalable on browsers
console.log(global);
// 4) Has common core modules
// 5) us CommonJS modules in place of ES6 modules (developers are working on a change for this)
const os = require("os");
const path = require("path");
const math = require("./math");
const { add, subtract, divide, multiply } = require("./math");

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log();

console.log(__dirname);
console.log(__filename);

console.log();

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));

console.log();

console.log(math.add(1, 3));
console.log(add(4, 5));
console.log(subtract(5, 4));
console.log(multiply(2, 3));
console.log(divide(45, 0));

// 6 Node js doesn't have all of the functions avalable to javascript
//   -- Most significant one is fetch()
