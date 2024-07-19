// For displaying the call stack, showing the order in which functions were called.
// Useful for understanding the execution flow, especially when debugging errors.

function food() {
  console.trace("Calling food");
  eat();
}

function eat() {
  console.trace("Calling eat");
}

food();

// Output:
// Calling food
//    at food (/path/to/your/script.js:10:3)
//    at <anonymous>:1:1
// Calling eat
//    at food (/path/to/your/script.js:11:3)
//    at <anonymous>:1:1
