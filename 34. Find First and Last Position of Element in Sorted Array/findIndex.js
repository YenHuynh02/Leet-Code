/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let arr = [];
    if (nums.includes(target)) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == target) {
                arr.push(i);
            }
        }
        arr.length == 1 ? arr.push(arr[0]) : arr = [arr[0], arr[arr.length - 1]];
        return arr;
    }
    return arr = [-1, -1];
};

const nums = [5, 7, 7, 8, 8, 10], target = 8;
console.log(searchRange(nums, target));

const nums1 = [1, 1, 1], target1 = 1;
console.log(searchRange(nums1, target1));