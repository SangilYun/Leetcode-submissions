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
    let height = helper(root.left) - helper(root.right);
    return Math.abs(height) >1 ? false : isBalanced(root.left) && isBalanced(root.right);
};

function helper(root){
    if(!root) return 0;
    return Math.max(helper(root.left), helper(root.right)) +1;
}