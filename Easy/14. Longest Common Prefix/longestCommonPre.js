/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs[0] || strs.length == 1) {
        return strs[0] || ""
    }

    strs.sort();

    let first = strs[0];
    let last = strs[strs.length - 1];
    let minLength = Math.min(first.length, last.length);

    let i = 0;
    while (i < minLength && first[i] === last[i]) {
        i++;
    }

    if (i === 0) {
        return "";
    }
    return first.substring(0, i);
};

var str = ["aaa", "aa", "aaa"];

console.log("\""+longestCommonPrefix(str)+"\"");