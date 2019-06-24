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
    if(head == null){
        return head;
    }
    else if(head.next==null){
        return head;
    }
    else{
        let currNode = head;
        let nextNode = head.next;
        currNode.next = null;
        let rest = reverseList(nextNode);
        nextNode.next = currNode;
        return rest;
    }
}