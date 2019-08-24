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
var mergeTwoLists = function(l1, l2) {
    let head =new ListNode(null);
    let currNode = head;
    while(l1 && l2){
        if(l1.val > l2.val){
            currNode.next = l2;
            l2 = l2.next;
        }else{
            currNode.next = l1;
            l1= l1.next;
        }
        currNode = currNode.next;
    }
    
    currNode.next = l1 || l2;
    return head.next;
};