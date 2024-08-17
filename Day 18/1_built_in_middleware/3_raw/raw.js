const express = require("express");
const app = express();

app.use(express.raw({ type: "multipart/form-data" }));
app.use(express.text());

app.post("/custom-protocal", (req, res) => {
  const requestedData = req.body;
  const parseData = parseCustomProtocol(requestedData);

  res.send(parseData);
});

app.post("/upload-file", (req, res) => {
  const fileBuffer = req.body;
  res.setHeader("Content-Type", "application/octet-stream");
  res.send({
    message: "Binary file successfully accepted",
    data: fileBuffer,
  });
});

function parseCustomProtocol(data) {
  const parts = data.split("&");
  // console.log(parts);
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
