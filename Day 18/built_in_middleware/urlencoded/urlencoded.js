const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post("/submit-form", (req, res) => {
  res.send(req.body);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
