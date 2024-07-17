const fs = require("fs").promises;
const path = require("path");

async function main() {
  try {
    const base64 = await fs.readFile(
      path.join(__dirname, "image", "bridge.jpeg"),
      "base64"
    );

    await fs.writeFile(path.join(__dirname, "binary.txt"), base64);
    console.log("Writing successful");
  } catch (err) {
    console.error(err.message);
  }
}

main();
