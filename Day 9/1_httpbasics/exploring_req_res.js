const http = require("http");

http
  .createServer(function (req, res) {
    // Explore req:

    // Method of the request (GET, POST, PUT, DELETE, etc.)
    console.log("Method:", req.method);

    // URL requested
    console.log("URL:", req.url);

    // Headers sent by the client
    console.log("Headers:", req.headers);

    // Remote address of the client
    console.log("Client IP:", req.socket.remoteAddress);

    // Example of using req.on to listen for events
    req.on("data", (chunk) => {
      console.log("Received data chunk:", chunk.toString());
    });

    // Explore res:

    // Set the response status code
    res.statusCode = 200;

    // Set headers for the response
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("X-Powered-By", "Node.js");

    // Write data to the response
    res.write("Hello from the server!\n");

    // Send the response back to the client
    res.end("This is the end of the response.\n");
  })
  .listen(3000, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("working at localhost:3000");
    }
  });
