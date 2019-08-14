/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let next = null;
    while(head){
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
    
};


    // let prev = null
    // let next = null
    // while(head){
    //     next = head.next;
    //     head.next=prev;
    //     prev = head;
    //     head=next;
    // }
    // return prev;