/**
 * @param {string} s
 * @return {string}
 */

var makeFancyString = function (s) {
    var count = 1;
    var stacks = [];
    for (var i = 0; i < s.length; i++) {
        if (i > 0 && s.charAt(i) === s.charAt(i - 1)) {
            count++;
        }
        else {
            count = 1;
        }
        if (count <= 2) {
            stacks.push(s.charAt(i));
        }
    }
    return stacks.join('');
};

var s = 'leeetcode';
var s1 = 'aaabaaaa';
console.log(makeFancyString(s));
console.log(makeFancyString(s1));
