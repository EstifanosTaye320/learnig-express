const multer = require("multer"); // helps file uploading, receiving, and storing and error handling
const express = require("express");
const app = express();

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded!");
});

app.listen(3000, function () {
  console.log("server at port 3000");
});
