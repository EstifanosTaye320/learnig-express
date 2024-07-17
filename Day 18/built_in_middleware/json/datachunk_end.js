const express = require("express");
const app = express();

app.post("/", function (req, res) {
  let data = "";
  req.on("data", function (data_chunk) {
    data += data_chunk.toString();
  });
  req.on("end", function () {
    const name = JSON.parse(data).name;
    res.send(name);
  });
});

app.listen(3000, function () {
  console.log("running at localhost:3000");
});
