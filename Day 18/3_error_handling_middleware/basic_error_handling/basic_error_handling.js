const express = require("express");
const app = express();

// your application routes
app.post("/error", (req, res, next) => {
  try {
    throw new Error("nice error");
  } catch (err) {
    next(err);
  }
});

// put error handling near the bottom of your file
app.use(function (err, req, res, next) {
  console.error(err.message);
  res.status(500).send({
    message: "Internal Server Problem",
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
