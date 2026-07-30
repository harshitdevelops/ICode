/**
 * Two Sum
 * Given an array of integers and a target, return indices of the two numbers
 * that add up to the target.
 *
 * Time: O(n) | Space: O(n)
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
export function twoSum(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    seen.set(nums[i], i);
  }

  return [];
}

// Demo
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
}
