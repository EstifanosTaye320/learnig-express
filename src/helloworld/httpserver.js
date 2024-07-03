const http  = require("http");

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Hello World\n");
    } else {
        res.statusCode = 404;
        res.end("Not Found\n");
    }
})

server.listen(3000, "localhost", () => {
    console.log("Http server running at port 3000 hostname localhost");
})