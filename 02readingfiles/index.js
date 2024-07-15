const fs = require("fs");
const path = require("path"); // For general pathing

// Most of the functions you find in node are asynchronus
/*
fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf8",
  function (err, data) {
    if (err) throw err;
    console.log(data);
  }
);
*/

/*
fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "Hello, my name is estif",
  function (err) {
    if (err) throw err;
    console.log("Write Complete");
  }
);
*/

/*
fs.appendFile(
  path.join(__dirname, "files", "test.txt"),
  "Testing text",
  function (err) {
    if (err) throw err;
    console.log("Append successful");
  }
);
*/

/*
fs.writeFile(
  path.join(__dirname, "files", "write_append.txt"),
  "This is the text written",
  function (err) {
    if (err) throw err;
    console.log("Write successful");
    fs.appendFile(
      path.join(__dirname, "files", "write_append.txt"),
      "\nThis is the text appended",
      function (err) {
        if (err) throw err;
        console.log("Append after write complete");
      }
    );
  }
);
*/

/*
fs.writeFile(
  path.join(__dirname, "files", "newfile.txt"),
  "This is the text written",
  function (err) {
    if (err) throw err;
    console.log("Write successful");
    fs.appendFile(
      path.join(__dirname, "files", "newfile.txt"),
      "\nThis is the text appended",
      function (err) {
        if (err) throw err;
        console.log("Append after write complete");

        fs.rename(
          path.join(__dirname, "files", "newfile.txt"),
          path.join(__dirname, "files", "newname.txt"),
          function (err) {
            if (err) throw err;
            console.log("Rename successful");
          }
        );
      }
    );
  }
);
*/

// console.log("Other stuff");
// console.log();
