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


var isValidBST = function(root, upperBound=Infinity, lowerBound=-Infinity) {
    if(!root) return true;
    if(root.val >= upperBound || lowerBound >= root.val) return false;
    return isValidBST(root.left, Math.min(upperBound, root.val), lowerBound)
            &&isValidBST(root.right, upperBound, Math.max(lowerBound, root.val));
            
};

