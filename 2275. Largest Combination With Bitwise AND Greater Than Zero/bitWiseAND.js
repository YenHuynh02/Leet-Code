/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
    let maxCount = 0;
    for (let bit = 0; bit < 32; bit++) {
        let count = 0;
        for (let num of candidates) {
            if (num & (1 << bit)) {
                count++;
            }
        }
        maxCount = Math.max(maxCount, count);
    }
    return maxCount;
};

const candidates = [16, 17, 71, 62, 12, 24, 14];
const candidates1 = [8, 8];

console.log(largestCombination(candidates));
console.log(largestCombination(candidates1));