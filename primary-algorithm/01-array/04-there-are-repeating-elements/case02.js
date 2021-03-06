const testFn = require('./test');

/**
解法 2
  4500ms, 5.01%
  46.9MB， 22.08%

思路
  indexOf / lastIndexOf

小结
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  if (!Array.isArray(nums)) {
    return false;
  }
  return nums.some(item => nums.indexOf(item) !== nums.lastIndexOf(item));
};

testFn(containsDuplicate, '解法 2');
