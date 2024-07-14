const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("What is the first number? ", (num1) => {
  readline.question("What is the second number? ", (num2) => {
    let a = parseFloat(num1);
    let b = parseFloat(num2);
    let placeholder;
    while (b != 0) {
      placeholder = a;
      a = b;
      b = placeholder % b;
    }
    console.log(a);
    readline.close();
  });
});
