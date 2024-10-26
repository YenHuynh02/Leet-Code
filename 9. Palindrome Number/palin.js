/**
 * @param {number} x
 * @return {boolean}
 */
const num = [121, 323, 145, , 909];

var isPalindrome = function(x) {
    var num = x.toString();
    var reversed = num.split('').reverse().join('');
    return num === reversed;
};

num.forEach((num) => {
    console.log(isPalindrome(num) ? 'Palindrome: ' + num : 'Not Palindrome: ' + num);
})