const express = require("express");
const app = express();

// ... (Your other middleware and routes)
// put error handling near the bottom of your file

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send("Internal server problem");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
