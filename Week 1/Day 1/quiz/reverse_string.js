const readline = require("readline");
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function reverse_string(str) {
  let output = "";
  const n = str.length;
  for (i = n - 1; i >= 0; i--) {
    output += str[i];
  }
  return output;
}

function main() {
  interface.question("Enter a string: ", function (date) {
    console.log(reverse_string(date));
    interface.close();
  });
}

main();
