/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function (nums) {
    // Find the set bit length by split the 0 out of binary number in each index and join it together in 1 index of arrays
    /*
    * Ex of convert in counterSetBits: 
    * 8 = 1000 -> split into ['1'. '0'. '0'. '0'] -> join as ['1'] and return length as [1]
    */
    let counterSetBits = (nums) => (nums >>> 0).toString(2).split('0').join('').length;

    const sortArr = [...nums].sort((a,b) => {
        const bitCountA = counterSetBits(a);
        const bitCountB = counterSetBits(b);
        return bitCountA === bitCountB ? a - b : '';
    });

    // Check if the sortArray matches the fully sorted 'nums'
    const targetSortArr = [...nums].sort((a, b) => a - b);
    return JSON.stringify(sortArr) === JSON.stringify(targetSortArr);
};

var nums = [8, 4, 2, 30, 15];
var nums1 = [1, 2, 3, 4, 5];
var nums2 = [3, 16, 8, 4, 2];

console.log(canSortArray(nums));
console.log(canSortArray(nums1));
console.log(canSortArray(nums2));