// Synchronus programming
function stepOne(callback) {
  console.log("Start 1");
  setTimeout(() => {
    callback(null, "Finish 1");
  }, 1000);
}

function stepTwo(callback) {
  console.log("Start 2");
  setTimeout(() => {
    callback(null, "Finish 2");
  }, 1000);
}

function stepThree(callback) {
  console.log("Start 3");
  setTimeout(() => {
    callback(null, "Finish 3");
  }, 1000);
}

// first task
stepOne((err, result) => {
  if (err) return console.log(err);
  console.log(result);
  // second task
  stepTwo((err, result) => {
    if (err) return console.log(err);
    console.log(result);
    // third task
    stepThree((err, result) => {
      if (err) return console.log(err);
      console.log(result);
    });
  });
});

// Exercise
// count the number of callback functions and higher order functions
// run the code, understand the output and rewrite the code
