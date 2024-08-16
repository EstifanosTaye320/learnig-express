const express = require("express");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("ejs", {
    user: {
      name: "estif",
    },
  });
});

app.listen(3000, function () {
  console.log("Server listening at http://localhost:3000/");
});
