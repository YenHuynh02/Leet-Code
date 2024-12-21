/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function (s) {
    var changes = 0;

    for (var i = 0; i < s.length; i += 2) {
        if (s[i] !== s[i + 1]) {
            changes++;
        }
    }

    return changes;
};

var s = '1001';
var s1 = '10';
var s2 = '0000';
console.log(minChanges(s));
console.log(minChanges(s1));
console.log(minChanges(s2));