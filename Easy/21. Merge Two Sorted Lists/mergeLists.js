/*Definition for singly-linked list.*/
function ListNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let head = new ListNode();
    let current = head;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        }

        else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    current.next = (list1 != null) ? list1 : list2;
    return head.next;
};

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

let node = mergeTwoLists(list1, list2);
while (node !== null) {
    console.log(node.val);
    node = node.next;
}