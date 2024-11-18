/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function (nums, maximumBit) {
    let xorSum = 0;
    let maxVal = (1 << maximumBit) - 1;
    let result = [];
    
    for (let num of nums) {
        xorSum ^= num;
    }

    for (var i = nums.length - 1; i >= 0; i--) {
        result.push(xorSum ^ maxVal);
        xorSum ^= nums[i];
    }
    return result;
};

var nums = [0, 1, 1, 3];
console.log(getMaximumXor(nums, 2));