/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
    let max = 0;
    let chunks = 0;

    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
        if (max === i) {
            chunks++;
        }
    }
    return chunks;
};

const arr = [4, 3, 2, 1, 0];
console.log(maxChunksToSorted(arr));

