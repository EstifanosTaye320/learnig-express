// explore image/jpeg image/png image/gif

const http = require("http");
const fs = require("fs");
const images = "./headers/public/images/download.gif";

const imageserver = http.createServer((req, res) => {
  fs.readFile(images, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(200, { "Content-Type": "image/jpeg" });
      res.end(data);
    }
  });
});

imageserver.listen(1234, "localhost", (err) => {
  if (err) return console.log(err);
  console.log("server running at localhost:1234");
});
