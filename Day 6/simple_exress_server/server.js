const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to express home route");
});

app.get("/about.html", (req, res) => {
    res.send("<h1>About Page</h1><p>This is the content of the about page</p>");
});

app.listen(1234, () => {
    console.log("Express server at localhost:1234");
})