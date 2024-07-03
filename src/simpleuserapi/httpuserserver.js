const http = require("http");

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/users") {
        let users = [{id: 1, name: "my name", cloth: "hat"}, {id: 2, name: "other name", cloth: "glasses"}];

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify(users));
    } else if (req.method === "GET" && req.url === "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Http Server Started!");
    } else {
        res.statusCode = 404;
        res.end("Not Found!");
    }
})

server.listen(3000, "localhost", () => {
    console.log("http user server running now");
})