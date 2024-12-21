/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
    var myArr = sentence.split(' ');
    for (var i = 0; i < myArr.length; i++) {
        if (myArr[i].charAt(myArr[i].length - 1) !== myArr[(i + 1) % myArr.length].charAt(0)) {
            return false;
        }
    }
    return true;
};

var sentence = 'leetcode exercises sound delightful';
var sentence1 = 'eetcode';
console.log(isCircularSentence(sentence));
console.log(isCircularSentence(sentence1));
