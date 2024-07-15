// Do things slowly piece by piece

const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream(path.join(__dirname, "files", "lorem.txt"), {
  encoding: "utf8",
});
const ws = fs.createWriteStream(path.join(__dirname, "files", "new_lorem.txt"));

/*
rs.on("data", (chunck) => {
  //   console.log(chunck);
  ws.write(chunck);
});
*/

// Same as on data write
rs.pipe(ws); // more efficent
