const readline = require("readline");
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function parse_date(date) {
  const components = date.split("-");
  return `Year = ${components[0]}, Month = ${components[1]}, Day = ${components[2]}`;
}

function main() {
  interface.question(
    "Enter a date in the format YYYY-MM-DD: ",
    function (date) {
      console.log(parse_date(date));
      interface.close();
    }
  );
}

main();
