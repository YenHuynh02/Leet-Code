/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const n = digits.length;

    // Traverse the array from the end to the beginning
    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1; // Increment the current digit
            return digits; // Return the result as no carry is needed
        } else {
            digits[i] = 0; // Set current digit to 0 and carry over
        }
    }

    // If we exit the loop, it means all digits were 9
    digits.unshift(1); // Add 1 at the start to handle the carry
    return digits;
};

const digits = [1, 2, 3];
console.log(plusOne(digits));