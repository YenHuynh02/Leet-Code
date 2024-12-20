/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const arr = [...nums1, ...nums2];
    arr.sort((a, b) => a - b);
    if (arr.length % 2 == 1) return arr[Math.floor(arr.length / 2)];
    else return ((arr[(arr.length / 2) - 1] + arr[arr.length / 2]) / 2);
};

const nums1 = [1, 3], nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2));

const nums3 = [1, 2], nums4 = [3, 4];
console.log(findMedianSortedArrays(nums3, nums4));