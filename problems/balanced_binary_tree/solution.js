/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root) return true;
    let height = Math.abs(helper(root.left) - helper(root.right));
    return height >1 ? false : isBalanced(root.left) && isBalanced(root.right);
    
};

var helper = function(root){
    if(!root) return 0;
    return Math.max(helper(root.right), helper(root.left)) + 1; 
}