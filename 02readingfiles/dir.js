const fs = require("fs");
const path = require("path");

if (!fs.existsSync(path.join(__dirname, "new_dir"))) {
  fs.mkdir(path.join(__dirname, "new_dir"), function (err) {
    if (err) throw err;
    console.log("Directory Created");
  });
}

if (fs.existsSync(path.join(__dirname, "new_dir"))) {
  fs.rmdir(path.join(__dirname, "new_dir"), function (err) {
    if (err) {
      throw err;
    }
    console.log("Directory Deleted");
  });
}
