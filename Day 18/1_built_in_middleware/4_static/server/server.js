const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("^/$|index(.html)?", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "view", "index.html"));
});

app.get("/new_page(.html)?", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "view", "new_page.html"));
});

app.get("/old_page(.html)?", function (req, res) {
  res.redirect(301, "/new_page.html");
});

app.get("/*", function (req, res) {
  res.status(404).sendFile(path.join(__dirname, "..", "view", "404.html"));
});

app.listen(3000, function () {
  console.log("Server running at localhost:3000");
});
