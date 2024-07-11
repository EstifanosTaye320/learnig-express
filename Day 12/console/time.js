// For measuring the execution time of code blocks or specific operations.

console.time("My Task");

let num = 0;
while (num < 1000) {
  num += 1;
}

console.timeEnd("My Task");

// Output:
// My Task: 123.456ms
