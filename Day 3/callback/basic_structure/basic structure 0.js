// What are they?

function function1() {
  console.log("I am a callback function, find me");
}

function function2(fun) {
  console.log("I am a higherorder function, find me");
  fun();
}

function2(function1);

// Fact

// Higher order functions: take a function as an argument
// Callback functions: are passed to a function as an argument
