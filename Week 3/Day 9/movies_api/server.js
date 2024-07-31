const http = require("http");
const url = require("url");

const myServer = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.end("Welcome to the moives api");
  } else if (req.url.startsWith("/movies")) {
    if (req.method === "GET") {
      const query = url.parse(req.url, true).query;
      if (query.s) {
        // searching here
      } else {
        // return all here
      }
    } else {
      res.statusCode = 401;
      res.end(
        "Your are not authorized to perform" + ` ${req.method} at this route`
      );
    }
  }
});

myServer.listen(3000, function (err) {
  if (err) {
    console.log(err.message);
  } else {
    console.log("server at http://localhost:3000");
  }
});
