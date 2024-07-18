const readline = require("readline");
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function gcf(a, b) {
  let rem;
  while (b !== 0) {
    rem = a % b;
    a = b;
    b = rem;
  }
  return a;
}

function main() {
  interface.question("Enter First Number: ", function (num1) {
    interface.question("Enter Second Number: ", function (num2) {
      try {
        console.log(gcf(parseInt(num1), parseInt(num2)));
      } catch (err) {
        console.error(err);
      }
      interface.close();
    });
  });
}

main();
