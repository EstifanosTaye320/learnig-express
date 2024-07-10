// see what you can do with req and res
// res.statusCode, res.writeHead, res.setHeader, res.end, res.write ...
// req.method, req.url, req.headers, req.socket (req.socket.remoteAddress), req.on
const http = require("http");

http.createServer(function(req, res) {
    // explore here
}).listen(3000, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("working at localhost:3000");
    }
});