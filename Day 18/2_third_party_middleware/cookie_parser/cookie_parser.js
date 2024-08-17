const cookieParser = require("cookie-parser"); // adding and parsing cookies
const express = require("express");
const app = express();

app.use(cookieParser());
app.use(express.static(".")); // serve the frontend files
app.use(express.json()); // parse incomeing json bodies

app.get("/profile", (req, res) => {
  const username = req.cookies.username;

  if (username) {
    res.send({ message: `Welcome, ${username}!` });
  } else {
    res.send({ message: "Please log in." });
  }
});

app.post("/login", (req, res) => {
  const enteredUsername = req.body.username;

  res.cookie("username", enteredUsername, { maxAge: 900000 });

  res.send({ message: "Login successful!" });
});

app.listen(3000, function () {
  console.log("server at port 3000");
});
