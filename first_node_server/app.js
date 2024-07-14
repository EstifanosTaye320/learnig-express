const http = require("http");

http
  .createServer(function (req, res) {
    if (req.url === "/") {
      console.log("root route");
      res.write("something");
      res.end();
    } else {
      console.log("no route like that available");
      res.end(JSON.stringify({ Error: "Route does not exist" }));
    }
  })
  .listen(3000, function (err) {
    if (err) console.error(err);
    else console.log("Server running at localhost:3000");
  });
