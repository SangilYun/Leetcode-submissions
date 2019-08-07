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
    if(!head) return true;
    let slow = head;
    let fast = head.next;
    while(fast!==null && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    let reversed = reverseList(slow);
    while(head){
        if(head.val !== reversed.val) return false;
        head = head.next;
        reversed=reversed.next;
    }
    return true;
};

var reverseList = function(head) {
    var pre = null;
    var next = null;
    while(head != null) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
};
