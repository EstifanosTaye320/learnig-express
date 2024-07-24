const helmet = require("helmet"); // security purposes
const express = require("express");
const app = express();

app.use(helmet());

app.listen(3000, function () {
  console.log("server at port 3000");
});
