/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var l1 = [2, 4, 3];
var l2 = [5, 6, 4];
var addTwoNumbers = function (l1, l2) {
    for (let i = 0; i < l1.lengths; i++) {
        let node1 = new ListNode(l1[i]);
        let node2 = new ListNode(l2[i]);
    }
    console.log(l1)
};