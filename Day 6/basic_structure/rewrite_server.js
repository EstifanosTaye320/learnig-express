// understand and rewrite the code in server js

// code here
const http = require("http");

const server = http.createServer(function (req, res) {
  res.write("Hello World!");
  res.end();
});

server.listen(1234, function () {
  console.log("server running at localhost:1234");
});
