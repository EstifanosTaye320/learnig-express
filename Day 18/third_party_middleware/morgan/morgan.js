const express = require("express");
const morgan = require("morgan");
const fs = require("fs");

const app = express();

const accessLogStream = fs.createWriteStream("./access.log", { flags: "a" });

app.use(morgan("combined", { stream: accessLogStream }));

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.post("/data", (req, res) => {
  fs.readFile("./data.txt", "utf-8", function (err, data) {
    if (err) {
      res.status(404).send("File Not Found");
    } else {
      res.send(data);
    }
  });
});

app.get("/about", (req, res) => {
  fs.readFile("./about.html", "utf-8", function (err, data) {
    if (err) {
      res.status[404].send("File Not Found");
    } else {
      res.send(data);
    }
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
