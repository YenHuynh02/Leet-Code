/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length == 0) return 0;
    let index = 1;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i-1]) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
};

var nums = [1, 1, 2];
var num1 = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));
console.log(removeDuplicates(num1));