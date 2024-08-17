const express = require("express");
const app = express();

app.use((err, req, res, next) => {
  if (err.status === 404) {
    res.status(404).send("Page not found!");
  } else {
    console.error(err.stack);
    res.status(500).send("Internal server Error");
  }
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
