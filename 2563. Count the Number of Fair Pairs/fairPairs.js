/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
function countFairPairs(nums, lower, upper) {
    nums.sort((a, b) => a - b); // Step 1: Sort the array
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        const start = binarySearch(nums, lower - nums[i], i + 1, true);  // Lower bound
        const end = binarySearch(nums, upper - nums[i], i + 1, false); // Upper bound
        count += end - start;
    }

    return count;
}

// Combined binary search for both lower and upper bounds
function binarySearch(arr, target, start, isLower) {
    let low = start, high = arr.length;
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] > target || (isLower && arr[mid] === target)) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
}

const nums = [0, 1, 7, 4, 4, 5], lower = 3, upper = 6;
console.log(countFairPairs(nums, lower, upper));