import fs from "fs";
import crypto from "crypto";
import readline from "readline";

const inter = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
const dirname = "/3 importing/new_age_node/es";

inter.question(
  `
        Choose and option:
            1. Enter text
            2. Proces text in file.txt
    `,
  function (data) {
    switch (data) {
      case "1":
        inter.question("Enter the text: ", function (data) {
          const cipher_text =
            cipher.update(data, "utf-8", "hex") + cipher.final("hex");
          console.log(data, cipher_text);
          inter.close();
        });
        return;
      case "2":
        fs.readFile("./file.txt", function (err, data) {
          if (err) {
            console.error(err);
          } else {
            const text = data.toString();
            const cipher_text =
              cipher.update(text, "utf-8", "hex") + cipher.final("hex");
            console.log(text, cipher_text);
            inter.close();
          }
        });
        return;
      default:
        console.log("Please try 1 or 2");
        inter.close();
        return;
    }
  }
);
