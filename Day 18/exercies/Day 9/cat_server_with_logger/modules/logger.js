const fs = require("fs");
const path = require("path");

let mylogstream;

function createWriter() {
  try {
    mylogstream = fs.createWriteStream(
      path.join(__dirname, "../", "logged_data.log"),
      {
        flags: "a",
      }
    );
  } catch (err) {
    console.log("Problem creating writer");
  }
}

function log_data(data) {
  if (mylogstream) {
    try {
      mylogstream.write(data);
    } catch (err) {
      console.log("Couldn't log data");
    }
  } else {
    console.log("There is no writer");
  }
}

createWriter();

module.exports = {
  log_data,
};
