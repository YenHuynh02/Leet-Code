/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {
    let remainderCount = Array(k).fill(0);

    // Step 1: Compute remainders and store counts in an array
    for (let num of arr) {
        let remainder = ((num % k) + k) % k; // Adjust for negative numbers
        console.log(remainder)
        remainderCount[remainder]++;
    }

    // Step 2: Check if pairs can be formed
    // Check remainder 0 specifically (must have even count)
    if (remainderCount[0] % 2 !== 0) {
        return false;
    }

    // Check for other remainders
    for (let i = 1; i <= Math.floor(k / 2); i++) {
        if (remainderCount[i] !== remainderCount[k - i]) {
            return false;
        }
    }

    return true;
};

var arr = [1, 2, 3, 4, 5, 10, 6, 7, 8, 9], k = 5;
// var arr1 = [1, 2, 3, 4, 5, 6], k1 = 7;
// var arr2 = [1, 2, 3, 4, 5, 6], k2 = 10;
console.log(canArrange(arr, k));
// console.log(canArrange(arr1, k1));
// console.log(canArrange(arr2, k2));