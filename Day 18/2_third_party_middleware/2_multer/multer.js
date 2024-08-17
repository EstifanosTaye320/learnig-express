const multer = require("multer"); // helps file uploading, receiving, and storing and error handling
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname)));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "2_third_party_middleware/2_multer/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post("/convert", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No image file provided");
  }

  const filePath = req.file.path;
  const filename = req.file.filename;

  res.json({
    message: "Image saved successfully",
    filename: filename,
    path: filePath,
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
