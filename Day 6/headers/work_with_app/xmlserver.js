// explore application/xml

const http = require("http");
const fs = require("fs");
const xml = "./Day 6/headers/public/xml/data.xml";

const xmlserver = http.createServer((req, res) => {
    fs.readFile(xml, function(err, data) {
        if (err) {
            console.log(err);
        }else {
            res.writeHead(200, {"Content-Type": "application/xml"});
            res.end(data);
        }
    });
})

xmlserver.listen(1234, "localhost", (err) => {
    if (err) return console.log(err);
    console.log("server running at localhost:1234");
})