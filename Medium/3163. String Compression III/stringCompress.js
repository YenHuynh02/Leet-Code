/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function (word) {
    var comp = "";
    var i = 0;

    while (i < word.length) {
        let char = word[i];
        var count = 0;
        while (i < word.length && word[i] === char && count < 9) {
            count++;
            i++;
        }
        comp += count + char;
    }
    return comp;
}
var word = 'aaaaaaaaaaaaabcde';
console.log(compressedString(word));