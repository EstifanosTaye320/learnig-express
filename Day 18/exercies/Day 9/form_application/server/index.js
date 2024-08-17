// server/index.js
const http = require("http");
const url = require("url");
const MessageRepository = require("./repository");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathName = parsedUrl.pathname;

  // Handle the routes
  if (pathName === "/messages") {
    handleMessages(req, res);
  } else if (
    pathName.startsWith("/messages/") &&
    !isNaN(parseInt(pathName.split("/")[2], 10))
  ) {
    const messageId = parseInt(pathName.split("/")[2], 10);
    handleMessageById(req, res, messageId);
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

// Handle messages route
const handleMessages = (req, res) => {
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

  const method = req.method;
  switch (method) {
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

// Handle message by ID route
const handleMessageById = (req, res, messageId) => {
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

  const method = req.method;
  switch (method) {
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

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
