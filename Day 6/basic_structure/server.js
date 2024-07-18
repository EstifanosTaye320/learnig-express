const http = require("node:http");

const myServer = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World!");
});

myServer.listen(1234, "localhost", (err) => {
  if (err) return console.log(err);
  console.log("Server running at port 1234 and host localhost");
});
