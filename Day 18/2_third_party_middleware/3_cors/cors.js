const cors = require("cors"); // setup cross origin resource sharing to allow other servers to access the api
const express = require("express");
const app = express();

const allowedOrigins = ["http://127.0.0.1:5500"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.get("/", function (req, res) {
  res.send("You have access");
});

app.listen(3000, function () {
  console.log("server at port 3000");
});
