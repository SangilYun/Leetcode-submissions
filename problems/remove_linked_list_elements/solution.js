/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
//     if(!head){
//         return null
//     }
    
//     const result= new ListNode();
//     let current = result;
//     while(head){
//         if(head.val !== val){
//             current.next = new ListNode(head.val)
//             current = current.next;
//         }
//         head = head.next
//     }
//     return result.next;

    //solution below is better because space complexity is O(1)
    while(head && head.val === val){
        head = head.next;
    }
    
    let current = head;
    while(current){
        if(current.next && current.next.val === val){
            current.next = current.next.next;
        }else{
            current = current.next    
        }
    }
    return head;
};