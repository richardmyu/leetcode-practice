const testFn = require('./test');

/**
解法 2
  96ms, 92.94%
  49.7MB, 10.47%

思路

小结
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
  let ary = nums.slice();
  let leng = ary.length;
  k = k % leng;
  for (let i = 0; i < leng; i++) {
    if (i < (leng - k)) {
      nums[i + k] = ary[i];
    } else {
      nums[i - (leng - k)] = ary[i];
    }
  }
  return nums;
};

testFn(rotate, '解法 2');
