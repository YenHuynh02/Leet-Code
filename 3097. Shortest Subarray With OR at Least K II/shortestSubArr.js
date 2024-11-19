/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function (nums, k) {
    let currentOr = 0, start = 0, minLength = Infinity;

    if (k == 0) return 1;

    if (!nums || nums.length === 0) {
        return -1;
    }

    for (let i = 0; i < nums.length; i++) {
        currentOr |= nums[i];

        while (currentOr >= k) {
            minLength = Math.min(minLength, i - start + 1);
            currentOr ^= nums[start];
            start++;
        }
    }

    return minLength === Infinity ? -1 : minLength;
};

const nums = [1, 2, 3], k = 2;
const nums1 = [2, 1, 8], k1 = 10;
const nums2 = [1, 2], k2 = 0;
console.log('1: ', minimumSubarrayLength(nums, k));
console.log('2: ', minimumSubarrayLength(nums1, k1));
console.log('3: ', minimumSubarrayLength(nums2, k2));