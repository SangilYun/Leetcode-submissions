/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let p1=headA;
    let p2=headB;
    while(p1!==p2){
        p1 = !p1 ? headB : p1.next;
        p2 = !p2 ? headA : p2.next;
    }
    return p2;
}






























/*
    if (!headA || !headB) return null;
    var p1 = headA;
    var p2 = headB;
    
    while(p1 !== p2 ){
        p1 = p1 === null ? headB : p1.next;
        p2 = p2 === null ? headA : p2.next;
    }
    return p1;

*/