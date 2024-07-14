const http = require("http");
const fs = require("fs");

const port = 3000;

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile(__dirname + "/index.html", function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end("Error: File not found");
      } else {
        res.end(data);
      }
    });
  })
  .listen(port, function (err) {
    if (err) return console.log(err);
    console.log("Server running at localhost:" + port);
  });
