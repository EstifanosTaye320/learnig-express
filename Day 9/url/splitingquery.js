// extract year and month from the following request http://localhost:3000?year=2017&month=july
const http = require("http");
const url = require("url");

http.createServer(function(req, res) {
    // code here
}).listen(3000, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("working at localhost:3000");
    }
});