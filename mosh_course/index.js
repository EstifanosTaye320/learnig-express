const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello world");
});

app.get("/api/course", function (req, res) {
  res.send([1, 2, 3]);
});

const port = process.env.PORT || 3000;
console.log(process.env.PROCESSOR_ARCHITECTURE);
app.listen(port, function () {
  console.log(`application running on port ${port}`);
});
