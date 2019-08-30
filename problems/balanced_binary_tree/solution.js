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
    return helper(root) !== -1;
};

function helper(root){
    if(!root) return 0;
    let leftHeight = helper(root.left);
    if(leftHeight === -1) return -1;
    
    let rightHeight = helper(root.right);
    if(rightHeight === -1) return -1;
    
    let heightDiff = Math.abs(leftHeight - rightHeight);
    
    if(heightDiff > 1){
        return -1
    }else{
        return Math.max(leftHeight, rightHeight) +1;
    }
}


/*
var isBalanced = function(root) {
    if(!root) return true;
    let height = helper(root.left) - helper(root.right);
    return Math.abs(height) >1 ? false : isBalanced(root.left) && isBalanced(root.right);
};

function helper(root){
    if(!root) return 0;
    return Math.max(helper(root.left), helper(root.right)) +1;
}
*/