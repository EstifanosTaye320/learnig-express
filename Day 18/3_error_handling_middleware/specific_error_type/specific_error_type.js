const express = require("express");
const app = express();

app.use((err, req, res, next) => {
  if (err instanceof CustomError) {
    res.status(400).send(err.message); // client error, server can't process
  } else {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
  }
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
