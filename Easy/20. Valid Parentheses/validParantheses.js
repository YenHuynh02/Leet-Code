/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    const bracket = {
        "}": "{",
        "]": "[",
        ")": "("
    }

    for (const c of s) {
        if (Object.values(bracket).includes(c)) {
            stack.push(c);
        }
        else if (bracket.hasOwnProperty(c)) {
            if (!stack.length || bracket[c] !== stack.pop()) {
                return false;
            }
        }
    }
    // loop(stack);
    return stack.length === 0;
};

var s = "{{[][][]}}";
console.log(isValid(s));