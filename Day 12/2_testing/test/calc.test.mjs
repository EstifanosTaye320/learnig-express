import { assert } from "chai";
import {
  add,
  substruct,
  divide,
  multiplication,
} from "../modules/calculator.js";

describe("Testing my Calculator", function () {
  it("testing add function", function () {
    const result = add(1, 2);
    assert.equal(result, 3);
  });
  it("testing substruct", function () {
    const result = substruct(2, 1);
    assert.equal(result, 1);
  });
  it("testing divid", function () {
    const result = divide(8, 0);
    assert.equal(result, Infinity);
  });
  it("testing multiplication", function () {
    const result = multiplication(5, 6);
    assert.equal(result, 30);
  });
});
