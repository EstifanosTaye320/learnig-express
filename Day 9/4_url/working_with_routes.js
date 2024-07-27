const http = require("http");
const url = require("url");

const myServer = http.createServer(function (req, res) {
  if (req.url === "/" && req.method === "GET") {
    res.end("Welcome to our user server");
  } else if (req.url.startsWith("/helloname") && req.method === "GET") {
    const query = url.parse(req.url, true).query;
    res.end(`Hello ${query.name}`);
  } else if (req.url.startsWith("/yearmonth") && req.method === "GET") {
    const query = url.parse(req.url, true).query;
    res.end(`Year ${query.year} Month ${query.month}`);
  } else {
    res.statusCode = 404;
    res.end("Error: Route Not Found");
  }
});

myServer.listen(3000, function (err) {
  if (err) console.log(err.message);
  else console.log("server at http://localhost:3000/");
});
