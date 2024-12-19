/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle == '') return 0;
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.slice(i, i + needle.length) === needle) {
            return i;
        }
    }
    return -1;
};

const haystack = 'hello', needle = 'll';
console.log(strStr(haystack, needle));

const haystack1 = 'leetcode', needle1 = 'leeto';
console.log(strStr(haystack1, needle1));