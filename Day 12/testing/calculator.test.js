// calculator.test.js

const { expect } = require("chai");
const calculator = require("./calculator");

describe("Calculator", () => {
  describe("add", () => {
    it("should add two numbers correctly", () => {
      expect(calculator.add(2, 3)).to.equal(5);
    });

    // Example of a test case with multiple assertions
    it("should add positive and negative numbers correctly", () => {
      expect(calculator.add(2, -3)).to.equal(-1);
      expect(calculator.add(-2, 3)).to.equal(1);
    });
  });

  describe("subtract", () => {
    it("should subtract two numbers correctly", () => {
      expect(calculator.subtract(5, 3)).to.equal(2);
    });
  });

  describe("multiply", () => {
    it("should multiply two numbers correctly", () => {
      expect(calculator.multiply(4, 5)).to.equal(20);
    });
  });

  describe("divide", () => {
    it("should divide two numbers correctly", () => {
      expect(calculator.divide(10, 2)).to.equal(5);
    });

    it("should throw an error when dividing by zero", () => {
      expect(() => calculator.divide(10, 0)).to.throw(
        Error,
        "Division by zero is not allowed"
      );
    });
  });
});
