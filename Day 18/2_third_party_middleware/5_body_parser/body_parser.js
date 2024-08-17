const bodyParser = require("body-parser"); // parse incoming request bodies
const express = require("express");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", function (req, res) {
  res.send(req.body);
});

app.listen(3000, function () {
  console.log("server at port 3000");
});
