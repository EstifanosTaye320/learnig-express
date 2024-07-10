const http = require("http");
const url = require("url");
const repo = require("./repository");

const server = http.createServer(function (req, res) {
  const requestpath = url.parse(req.url, true);
  const pathname = requestpath.pathname;
  if (pathname == "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("welcome to message rest api");
  } else if (pathname == "/messages") {
    handlerequers(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("route does not exist");
  }
});

function handlerequers(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(repo.getAll()));
  } else if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        let new_message = JSON.parse(body);
        new_message = repo.create(new_message);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(new_message));
      } catch (err) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: err }));
      }
    });
  } else {
    console.log("method not allowed", req.method);
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "method not supported" }));
  }
}

server.listen(3000, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("server running at localhost:3000");
  }
});
