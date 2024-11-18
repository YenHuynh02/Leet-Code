/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var minEnd = function(n, x) {
    let result = BigInt(x);        // Start with x
    let remaining = BigInt(n - 1); // Remaining numbers to distribute
    let position = 1n;             // Bit position to check

    while (remaining > 0n) {
        // Check if the current bit in x is 0
        if ((BigInt(x) & position) === 0n) {
            // Use this position for distributing bits of remaining
            result |= (remaining & 1n) * position;
            remaining >>= 1n; // Move to the next bit in remaining
        }
        position <<= 1n; // Move to the next bit position
    }

    return Number(result); // Convert BigInt back to a number
};

var n = 3, x = 4;
var n1 = 2, x1 = 7;

console.log(minEnd(n, x));
console.log(minEnd(n1,x1));