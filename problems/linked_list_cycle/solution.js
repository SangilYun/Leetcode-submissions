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
    if(!head?.next){
        return false;
    }
    let current = head;
    let runner = head.next.next;
    while(current !== runner){
        current = current?.next;
        runner = runner?.next?.next;
    }
    return !!current ;
};