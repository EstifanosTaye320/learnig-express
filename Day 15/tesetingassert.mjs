// test first then code
import { assert } from "chai";
import add from "./modules/calc.js";

describe("testing the add function", function () {
  it("should return 5 to the addition of 2 and 3", function () {
    const result = false;
    assert(result, 5);
  });

  it("should return 0 if there are no nums", function () {
    const result = false;
    assert(result, 0);
  });
});
