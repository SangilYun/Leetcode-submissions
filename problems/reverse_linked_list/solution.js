/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    let prevHead = null;    
    while(head){
        const currentHead = head;
        head = head.next;
        currentHead.next = prevHead;
        prevHead = currentHead;
       
    }
    
    
    return prevHead;
};