const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url == "/" && req.method == "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    fs.readFile(path.join(__dirname, "content.json"), function (err, data) {
      if (err) {
        res.statusCode = 404;
        res.end("File Not Found");
      } else {
        res.end(data);
      }
    });
  } else if (req.url == "/browser.js" && req.method == "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/javascript");
    fs.readFile(path.join(__dirname, "browser.js"), function (err, data) {
      if (err) {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("File Not Found");
      } else {
        // data = data.toString();
        console.log("get js");
        res.end(data);
      }
    });
  } else if (req.url == "/index.html" && req.method == "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    fs.readFile(path.join(__dirname, "browser.html"), function (err, data) {
      if (err) {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("File Not Found");
      } else {
        data = data.toString();
        console.log("get html");
        res.end(data);
      }
    });
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
