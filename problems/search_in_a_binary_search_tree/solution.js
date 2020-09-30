/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

var searchBST = function(root, val) {
    return inOrder(root,val);
};

const inOrder = (root, val) =>{
    if(!root){
        return null;
    }
    if(root.val === val){
        return root;
    }
    
    return inOrder(root.right, val) || inOrder(root.left, val)
}