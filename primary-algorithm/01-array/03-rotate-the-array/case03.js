const testFn = require('./test');

/**
解法 3
  96ms, 92.94%
  49.7MB, 10.47%

思路

小结
  leetcode 运行异常
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  if (!Array.isArray(nums) || k < 0) {
    return;
  }
  k = k % nums.length;
  let step = nums.length - k;
  nums = nums.splice(-k, step).concat(nums);

  return nums;
};

testFn(rotate, '解法 3');
