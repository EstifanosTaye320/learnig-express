// explore application/pdf

const http = require("http");
const fs = require("fs");
const pdf = "./Day 6/headers/public/pdf/cs188-sp23-note02.pdf";

const pdfserver = http.createServer((req, res) => {
    fs.readFile(pdf, function(err, data) {
        if (err) {
            console.log(err);
        }else {
            res.writeHead(200, {"Content-Type": "application/pdf"});
            res.end(data);
        }
    });
})

pdfserver.listen(1234, "localhost", (err) => {
    if (err) return console.log(err);
    console.log("server running at localhost:1234");
})