const assert = require("assert");
const greaterCallbackValue = require("../problems/19-greater-callback-value.js");

describe("greaterCallbackValue", function() {
  it("", function() {
    let doubler = function(n) {
      return 2 * n;
    };

    let squarer = function(n) {
      return n * n;
    };

    assert.equal(greaterCallbackValue(5, doubler, squarer), 25);
    assert.equal(greaterCallbackValue(1, doubler, squarer), 2);
    assert.equal(greaterCallbackValue(9, Math.sqrt, doubler), 18);
  });
});