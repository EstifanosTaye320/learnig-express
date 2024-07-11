// explore dir, error, table, trace, time

// import the custom data moudle
const store = require("./data");

// test out console.dir and console.table

console.dir(store.deepObj);
console.table(store.tableArr);

// text out console.error

try {
  store.throwerror();
} catch (err) {
  console.error(err.message);
}

// test out console.time and console.trace

let count = 0;
let myInterval;

function main() {
  console.time("main function");
  myInterval = setInterval(increment, 1000);
}

function increment() {
  count += 1;
  console.trace(count);

  if (count > 3) {
    clearInterval(myInterval);
    console.timeEnd("main function");
  }
}

main();
