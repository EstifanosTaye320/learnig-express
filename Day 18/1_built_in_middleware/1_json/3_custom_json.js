const express = require("express");
const app = express();
const json = require("../../middleware/custom_json_middleware");

app.use(json);

app.post("/", function (req, res) {
  res.send(req.body.name);
});

app.listen(3000, function () {
  console.log("running at localhost:3000");
});
