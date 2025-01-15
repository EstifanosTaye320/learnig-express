const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to app.js");
});

app.post("/post", (req, res) => {
  res.send("creating");
});

app.put("/put", (req, res) => {
  res.send("updating");
});

app.delete("/delete", (req, res) => {
  res.send("deleting");
});

app.listen(3000);
