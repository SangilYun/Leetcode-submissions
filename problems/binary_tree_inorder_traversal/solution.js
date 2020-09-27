/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
//     let stack =[];
//     let result = [];
    
//     while(root || stack.length){
//         if(root){
//             stack.push(root);
//             root = root.left;
//         }else{
//             root = stack.pop();
//             result.push(root.val);
//             root= root.right;
//         }
//     }
//     return result;
    let answer = [];
    helper(root,answer);
    return answer;
    
};

function helper(root, answer){
    if(!root) return null;
    helper(root.left, answer);
    answer.push(root.val);
    helper(root.right, answer);
}