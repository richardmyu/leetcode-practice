const testFn = require('./test');

/**
解法 1
  64ms, 83.76%
  41MB, 18.81%

思路

小结
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  let r = [];
  let leng = matrix.length;
  for (let k = 0; k < leng; k++) {
    r.push(matrix[k].slice(0));
  }
  for (let i = 0; i < leng; i++) {
    for (let j = 0; j < leng; j++) {
      matrix[i][j] = r[leng - 1 - j][i];
    }
  }
  return matrix;
};

testFn(rotate, '解法 1');
