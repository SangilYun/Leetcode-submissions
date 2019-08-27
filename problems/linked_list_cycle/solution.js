/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let set = new Set();
    while(head!==null){
        if(set.has(head)){
            return true;
        }else{
            set.add(head);
        }
        head= head.next;
    }
    return false;
};










/*
    if(head === null || head.next === null){
        return false;
    }
    let fast = head.next;
    let slow = head;
    while(slow !== fast){
        if(fast === null ||fast.next === null){
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
*/