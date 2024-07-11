// test first

const { expect } = require("chai");
const sumArray = require("./sumArray"); // The function is not yet defined

describe("sumArray", () => {
  it("should return 0 for an empty array", () => {
    expect(sumArray([])).to.equal(0);
  });

  it("should return the sum of the elements in a non-empty array", () => {
    expect(sumArray([1, 2, 3])).to.equal(6);
  });
});

// mocha sumArray.test.js >>> running the test
