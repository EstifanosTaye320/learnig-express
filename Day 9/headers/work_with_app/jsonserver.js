// explore application/json

const http = require("http");
const fs = require("fs");

const jsonserver = http.createServer((req, res) => {
  const data = { id: 1, name: "estif", pet: "dog", otherpet: "cat" };
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
});

jsonserver.listen(1234, "localhost", (err) => {
  if (err) return console.log(err);
  console.log("server running at localhost:1234");
});
