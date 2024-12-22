/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            res[j][n - i - 1] = matrix[i][j];
        }
    }
    
    for (let i = 0; i < n; i++) {
        matrix[i] = res[i].slice();
    }
};

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
rotate(matrix);
console.log(matrix);