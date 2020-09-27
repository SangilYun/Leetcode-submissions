/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(null);
    let dummy = head;
    let carry = 0;
    while(l1 || l2){
        let sum = (l1? l1.val : 0) + (l2? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        head.next = new ListNode(sum %10);
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        head = head.next;
    }
    
    if(carry) head.next = new ListNode(1);
    return dummy.next;
};