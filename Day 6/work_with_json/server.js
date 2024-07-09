const http = require("http");

const myServer = http.createServer((req, res) => {
    const data = {id: 1, name: "estif", pet: "dog", otherpet: "cat"};
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(data));
})

myServer.listen(1234, "localhost", (err) => {
    if (err) return console.log(err);
    console.log("server running at localhost:1234");
})