// useing the fs module full access

const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "example.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
