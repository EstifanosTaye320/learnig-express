// Simulation of the fs.readFile() method
// You wanted to read a file and output the content on the console

// Hide the implementation of the readfile function
function readfile(path, callback) {
  const fs = require("fs");

  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

// Understand this code
readfile("./Day 3/callback/real_life_modules/reading.txt", (err, data) => {
  if (err) {
    console.log("This is the error" + " " + err);
  } else {
    console.log(data);
  }
});

// Exercise:
// With out looking into the readfile implementation what do you think readfile does?
// What do you think the purpose of the callback function is?
