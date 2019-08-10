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
    let arr = [];
    helper(root, arr)
    return arr;
};

const helper =(root, arr)=>{
    if(!root) return arr;
    if(root.left) helper(root.left, arr);
    if(root.val) arr.push(root.val);
    if(root.right) helper(root.right, arr);   
}