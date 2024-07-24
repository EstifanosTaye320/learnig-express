const rateLimit = require("express-rate-limit"); // protect your application from abuse
const express = require("express");
const cors = require("cors");
const app = express();

const allowed = ["http://127.0.0.1:5500"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (allowed.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("not nice"));
      }
    },
  })
);

const limiter = rateLimit({
  windowMs: 5000, // 5 sec
  max: 100, // 100 requests per windowMs
});
app.use(limiter);

app.get("/", function (req, res) {
  res.send("nice");
});

app.listen(3000, function () {
  console.log("server at port 3000");
});
