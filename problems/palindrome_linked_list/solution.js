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
var isPalindrome = function(head) {
    //find the middle node
    let slow = head;
    let fast = head;
    while(fast!==null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    //odd length
    if(fast) fast = fast.next;
    let reversed = reverse(slow);
    
    while(reversed){
        if(head.val !== reversed.val) return false;
        head = head.next;
        reversed = reversed.next;
    }
    
    return true;
};

function reverse(head){
    let prev, curr=head, next
    while(curr){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;  
    }
    return prev;
}