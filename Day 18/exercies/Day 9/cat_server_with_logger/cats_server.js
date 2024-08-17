const http = require("http");
const { cats } = require("./modules/reqository.js");
const { Cat } = require("./modules/cat_model.js");
const logger = require("./modules/logger.js"); // Import your logger module

const myServer = http.createServer(function (req, res) {
  const date = new Date().toISOString();
  const method = req.method;
  const path = req.url;

  logger.log_data(`[${date}] ${method} ${path}\n`);

  if (req.url === "/" && req.method === "GET") {
    res.end("welcome to the cat server");
  } else if (req.url === "/cats" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(cats));
  } else if (req.url === "/cats" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const newCat = new Cat(
        JSON.parse(body).name,
        JSON.parse(body).color,
        JSON.parse(body).pictureUrl
      );
      cats.push(newCat);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newCat));
    });
  } else if (req.url === "/cats" && req.method === "PATCH") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const updatedCat = {
        name: JSON.parse(body).name,
        newcolor: JSON.parse(body).color,
        newpictureUrl: JSON.parse(body).pictureUrl,
      };
      const catIndex = cats.findIndex((cat) => cat.name === updatedCat.name);
      if (catIndex !== -1) {
        if (updatedCat.newcolor) {
          cats[catIndex].color = updatedCat.newcolor;
        }
        if (updatedCat.newpictureUrl) {
          cats[catIndex].pictureUrl = updatedCat.newpictureUrl;
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(cats[catIndex]));
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Cat not found" }));
      }
    });
  } else if (req.url === "/cats" && req.method === "DELETE") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const name = JSON.parse(body).name;
      const catIndex = cats.findIndex((cat) => cat.name === name);
      if (catIndex !== -1) {
        cats.splice(catIndex, 1);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Cat deleted successfully" }));
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Cat not found" }));
      }
    });
  } else {
    res.statusCode = 404;
    res.end("File Not Found");
  }
});

myServer.listen(3000, function (err) {
  if (err) {
    console.log(err.message);
  }
  console.log("server at http://localhost:3000");
});
