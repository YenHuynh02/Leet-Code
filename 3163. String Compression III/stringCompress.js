/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function (word) {
    var arr = word.split("");
    var stacks = [];
    var countA = 0, countB = 0, countC = 0, countD = 0, countE = 0;
    for (var i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'a':
                countA++;
                stacks.push()
                break;
            case 'b':
                countB++;
                break;
            case 'c':
                countC++;
                break;
            case 'd':
                countD++;
                break;
            case 'e':
                countE++;
                break;
        }
    }
}
var word = 'abcde';
compressedString(word);