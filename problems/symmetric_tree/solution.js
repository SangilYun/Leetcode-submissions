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
var isSymmetric = function(root) {
    return helper(root, root);
};

function helper(lRoot, rRoot){
    if(!lRoot&&!rRoot) return true;
    if(!lRoot||!rRoot) return false;
    return helper(lRoot.right, rRoot.left) && helper(lRoot.left, rRoot.right) && lRoot.val === rRoot.val;
}
