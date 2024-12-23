express = require("express");

app = express();

app.get("/", (req, res) => {
  res.sendFile("./assets/home.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./assets/about.html", { root: __dirname });
});

app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

app.use((req, res) => {
  res.status(404).sendFile("./assets/404.html", { root: __dirname });
});

app.listen("8080");
