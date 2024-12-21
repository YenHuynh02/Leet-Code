/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    return permutate(nums);
};

function permutate(arr, m = [], results = []) {
    if (arr.length === 0) {
        results.push(m);
    }

    else {
        for (let i = 0; i < arr.length; i++) {
            let curr = arr.slice();
            let next = curr.splice(i, 1);
            permutate(curr.slice(), m.concat(next), results)
        } 
    }
    return results;
}

const nums = [1, 2, 3];
console.log(permute(nums));