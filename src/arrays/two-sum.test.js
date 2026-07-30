import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { twoSum } from "./two-sum.js";

describe("twoSum", () => {
  it("finds the pair that sums to target", () => {
    assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
  });

  it("works when the pair is later in the array", () => {
    assert.deepEqual(twoSum([3, 2, 4], 6), [1, 2]);
  });

  it("handles duplicate values", () => {
    assert.deepEqual(twoSum([3, 3], 6), [0, 1]);
  });
});
