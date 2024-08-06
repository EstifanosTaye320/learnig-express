// sumArray.js after the test is written
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

module.exports = sumArray;

// mocha sumArray.test.js >> run the test again
// more concise version of the code the above on is still right

// function sumArray(arr) {
//   return arr.reduce((acc, val) => acc + val, 0);
// }
