const express = require("express");
const app = express();

app.use(express.raw());
app.use(express.text());

app.post("/custom-protocal", (req, res) => {
  const requestedData = req.body;
  console.log(requestedData);
  const parseData = parseCustomProtocol(requestedData);

  res.send(parseData);
});

app.post("/upload-file", (req, res) => {
  const fileBuffer = req.body;
  //handle data
  res.send(fileBuffer);
});

function parseCustomProtocol(data) {
  const parts = data.split("&");
  const parsedData = {};
  for (const part of parts) {
    const [key, value] = part.split("=");
    parsedData[key] = value;
  }
  return parsedData;
}

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
