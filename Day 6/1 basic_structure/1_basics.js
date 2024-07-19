// importing http from
const http = require("node:http");

// createServer() used to create a web server
http
  .createServer(function (req, res) {
    res.write("Simple Web Server"); // write the text to the user
    res.end(); // end the response
  })
  .listen(3000, function (err) {
    if (err) {
      console.log(err); // handle error
    } else {
      console.log("working at localhost:3000");
    }
  }); // allows the server to listen at port 3000
