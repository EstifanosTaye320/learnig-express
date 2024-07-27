const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const MessageRepository = require("./repository");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathName = parsedUrl.pathname;

  if (pathName === "/messages") {
    handleMessages(req, res);
  } else if (
    pathName.startsWith("/messages/") &&
    !isNaN(parseInt(pathName.split("/")[2], 10))
  ) {
    handleMessageById(req, res, parseInt(pathName.split("/")[2], 10));
  } else if (pathName.startsWith("/frontend/")) {
    handleFrontend(req, res, path.join(__dirname, ".."));
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

const handleMessages = (req, res) => {
  switch (req.method) {
    case "GET":
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(MessageRepository.getAll()));
      break;
    case "POST":
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", () => {
        try {
          const message = JSON.parse(body);
          const newMessage = MessageRepository.create(message);
          res.statusCode = 201;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(newMessage));
        } catch (error) {
          res.statusCode = 400;
          res.end(JSON.stringify({ error: "Invalid message format" }));
        }
      });
      break;
    default:
      res.statusCode = 405;
      res.end("Method Not Allowed");
      break;
  }
};

const handleMessageById = (req, res, messageId) => {
  switch (req.method) {
    case "GET":
      const message = MessageRepository.getById(messageId);
      if (message) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(message));
      } else {
        res.statusCode = 404;
        res.end("Not Found");
      }
      break;
    case "PATCH":
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", () => {
        try {
          const updatedMessage = JSON.parse(body);
          const updated = MessageRepository.update(messageId, updatedMessage);
          if (updated) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(updated));
          } else {
            res.statusCode = 404;
            res.end("Not Found");
          }
        } catch (error) {
          res.statusCode = 400;
          res.end(JSON.stringify({ error: "Invalid message format" }));
        }
      });
      break;
    case "DELETE":
      const deleted = MessageRepository.delete(messageId);
      if (deleted) {
        res.statusCode = 204;
        res.end();
      } else {
        res.statusCode = 404;
        res.end("Not Found");
      }
      break;
    default:
      res.statusCode = 405;
      res.end("Method Not Allowed");
      break;
  }
};

const handleFrontend = (req, res, dirPath) => {
  const extname = path.extname(req.url).toLowerCase();
  if (extname == ".js") {
    res.setHeader("Content-Type", "application/javascript");
  }

  fs.readFile(path.join(dirPath, req.url), "utf-8", function (err, data) {
    if (err) {
      res.statusCode = 404;
      res.end("File Not Found");
    } else {
      res.end(data);
    }
  });
};

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
