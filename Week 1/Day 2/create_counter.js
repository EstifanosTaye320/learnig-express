function createCounter() {
  let counter = 0;
  return function () {
    counter += 1;
    console.log(counter);
  };
}

let increament = createCounter();
let isRunning = true;
for (i = 0; i < 10; i++) {
  increament();
}
