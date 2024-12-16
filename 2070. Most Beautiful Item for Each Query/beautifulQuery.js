/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function (items, queries) {
    items.sort((a, b) => a[0] - b[0]);

    let maxBeauty = 0;
    for (let i = 0; i < items.length; i++) {
        maxBeauty = Math.max(maxBeauty, items[i][1]);
        items[i][1] = maxBeauty;
    }

    let queriesIndices = queries.map((price, index) => [price, index]);
    queriesIndices.sort((a, b) => a[0] - b[0])

    let result = new Array(queries.length).fill(0);
    let i = 0;
    for (let [price, index] of queriesIndices) {
        while (i < items.length && items[i][0] <= price) {
            i++;
        }
        console.log(i)
        result[index] = i > 0 ? items[i - 1][1] : 0;
    }

    return result;
};

const items = [[1, 2], [3, 2], [2, 4], [5, 6], [3, 5]];
const queries = [1, 2, 3, 4, 5, 6];
console.log(maximumBeauty(items, queries));