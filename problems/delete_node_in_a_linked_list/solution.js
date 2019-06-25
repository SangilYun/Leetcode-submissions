/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @param {number} n
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node, n) {
    if(node.val ===n){
        node.val = node.next.val
        node.next = node.next.next
    }
    
    let prevNode = node;
    let currNode = node.next;

    while(currNode){
        if(currNode.val === n){
            prevNode.next = currNode.next
            return;
        }
        prevNode = currNode;
        currNode = currNode.next;
    }
};