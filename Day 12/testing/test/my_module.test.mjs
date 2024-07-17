import { expect } from "chai";
import { myfunction, myOtherFunction } from "../modules/my_module.js";

describe("Testing the my_module module", function () {
  it("testing myfunction", function () {
    const result = myfunction("estif");
    expect(result).to.equal("Hello estif");
  });
  it("testing myOtherFunction", function () {
    const result = myOtherFunction("estif");
    expect(result).to.equal("Good Bye, estif");
  });
});
