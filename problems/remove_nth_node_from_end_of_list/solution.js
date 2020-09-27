/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let idx = recursive(head,n);
    if(idx === n) head = head.next;
    return head;
}

function recursive(head,n){
    if(!head) return 0;
    let idx = recursive(head.next,n);
    if(idx === n){
        head.next = head.next.next;
    }
    return idx+1;
}