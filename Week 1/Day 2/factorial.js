const readline = require("readline");
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function factorial(number) {
  let result = 1;
  for (i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
}

function main() {
  interface.question("Enter a number:  ", function (date) {
    console.log(factorial(parseInt(date)));
    interface.close();
  });
}

main();
