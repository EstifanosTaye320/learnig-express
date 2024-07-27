const http = require("http");

const myServer = http.createServer((req, res) => {
    if(req.url == "/" && req.method == "GET") {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Welcome to the home route");
    } else if (req.url == "/about.html" && req.method == "GET") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>About Page</h1>");
        res.write("<p>this is the content of the about page</p>");
        res.end();
    } else {
        res.statusCode = 404;
        res.end("File Not Found");
    }
});

myServer.listen(1234, "localhost", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("server now running at localhost:1234");
    }
});