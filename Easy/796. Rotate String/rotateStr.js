/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    var arrS = s.split(" ");
    var arrGoal = goal.split(" ");
    var count = 0;

    while (arrS[0] !== arrGoal[0] && count < arrS[0].length) {
        arrS[0] = arrS[0].slice(1) + arrS[0].charAt(0);
        count++;
    }
    if (arrS[0] !== arrGoal[0]) {
        return false;
    }
    return arrS[0] === arrGoal[0];
}

var s = 'abcde', goal = 'cdeab';
var s1 = 'abcde', goal1 = 'abced';
console.log(rotateString(s, goal));
console.log(rotateString(s1, goal1));