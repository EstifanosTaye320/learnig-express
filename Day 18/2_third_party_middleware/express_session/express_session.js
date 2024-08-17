const express = require("express");
const session = require("express-session");
const app = express();

let items = [];

app.use(
  session({
    secret: "your-super-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.json());

app.post("/login", (req, res) => {
  const username = req.body.username;
  if (username) {
    req.session.loggedIn = true;
    res.send("Login successful!");
  } else {
    res.send("Invalid username or password");
  }
});

app.post("/additem", (req, res) => {
  if (req.session.loggedIn) {
    const newItem = req.body.item;
    items.push(newItem);
    req.session.items = items;
    res.send("Item added!");
  } else {
    res.send("Please log in first!");
  }
});

app.get("/items", (req, res) => {
  if (req.session.loggedIn) {
    res.send(req.session.items || []);
  } else {
    res.send("Please log in first!");
  }
});

app.get("/profile", (req, res) => {
  if (req.session.loggedIn) {
    res.send("You are logged in!");
  } else {
    res.send("You are not logged in!");
  }
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
