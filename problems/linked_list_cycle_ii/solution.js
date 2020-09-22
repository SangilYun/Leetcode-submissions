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
var detectCycle = function(head) {
    const set = new Set();
    if(hasLoop(head)){
        while(head){
            if(set.has(head)){
                return head;
            }else{
                set.add(head)
            }
            head = head.next;
        }
    }else{
        return null;
    }
};

const hasLoop =(head)=>{
    let slow = head;
    let fast = head?.next?.next;
    
    while(slow !== fast){
        slow = slow?.next;
        fast = fast?.next?.next;
    }
    
    return !!slow;
}