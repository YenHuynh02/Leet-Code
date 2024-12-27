/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let maxScore = 0;
    let maxI = values[0] + 0; //Initialize with index 0 of array

    for (let j = 1; j < values.length; j++) {
        // Calculate the score for the current pair (i, j)
        maxScore = Math.max(maxScore, maxI + values[j] - j);
        // Update maxI to include the current value and index
        maxI = Math.max(maxI, values[j] + j);
    }

    return maxScore;
};

const values = [8, 1, 5, 2, 6];
console.log(maxScoreSightseeingPair(values));