const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    let filepath = "./Day 6/servinglocalfiles/public/" + req.url;
    fs.readFile(filepath, (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.end("File not found");
        }else {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.write(data);
            res.end();
        }
    })
});

myServer.listen(1234, "localhost", (err) => {
    if (err) {
        console.log(err);
    }else {
        console.log("server running at localhost:1234");
    }
})