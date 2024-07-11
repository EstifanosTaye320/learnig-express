const http = require("http");
const url = require("url");
const repo = require("./repository");

const server = http.createServer(function (req, res) {
  const requestpath = url.parse(req.url, true);
  const pathname = requestpath.pathname;
  // handle your routes
});

// handle methods GET and POST
function handlerequers(req, res) {
  // set up cross origin resources
  // code here
  // set up handlers for GET, POST and otherwise
  // code here
}

server.listen(3000, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("server running at localhost:3000");
  }
});
