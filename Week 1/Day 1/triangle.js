const readline = require("readline");
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function triangle(number) {
  let output = "* ";
  for (i = 0; i < number; i++) {
    console.log(output);
    output += "* ";
  }
}

function main() {
  interface.question("Enter a positive number: ", function (date) {
    triangle(date);
    interface.close();
  });
}

main();
