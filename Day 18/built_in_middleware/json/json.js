const express = require("express");
const app = express();

app.use(express.json());

app.post("/", function (req, res) {
  res.send(req.body.name);
});

app.listen(3000, function () {
  console.log("Server at localhost:3000");
});
