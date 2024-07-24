const compression = require("compression"); // increase performance when working with large data
const express = require("express");
const app = express();

app.use(compression());

app.listen(3000, function () {
  console.log("server at port 3000");
});
