// explore text/plain, text/html

const http = require("http");

http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.write("Simple Web Server");
    res.end();
}).listen(3000, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("working at localhost:3000");
    }
});