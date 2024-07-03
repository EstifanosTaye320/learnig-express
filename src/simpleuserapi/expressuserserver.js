const express = require("express");
const app = express();

app.get("/users", (req, res) => {
    let users = [{id:1, name: "my name", cloth: "hat"}, {id: 2, name: "other name", cloth: "glasses"}];

    res.json(users);
})

app.get('/', (req, res) => {
    res.send("Welcome to express user server")
})

app.listen(3000, () => {
    console.log("Express server now running");
})