const http = require("http");
const fs = require("fs");
const path = require("path");

const PUBLIC_DIR = "./Day 9/simpleserver/servinglocalfiles/public";

const server = http.createServer((req, res) => {
  let filePath = req.url;

  // handle the filepath use: path.join()

  // code here

  // check to see if the file exists use: fs.constats.F_OK
  // determain the content type use: getContentType(path)
  // read the file and respond

  // code here
});

// Helper function to get Content-Type based on file extension use: path.extname
function getContentType(filePath) {
  // code here
}

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
