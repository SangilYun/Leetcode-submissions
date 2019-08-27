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
    return isMirror(root, root);
};

const isMirror = (lRoot, rRoot) =>{
    if(!lRoot && !rRoot) return true;
    if(!lRoot|| !rRoot) return false;
    return lRoot.val === rRoot.val 
        && isMirror(lRoot.right, rRoot.left)
        && isMirror(lRoot.left, rRoot.right);
}