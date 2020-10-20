/*
Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

    5
   / \
  2   12
     /  \
    3    8
return 5 (i.e. 2 + 3)

       2
      / \
    4    2
   / \ 
  3   9 
return 3 (i.e. 2 + 3)
*/

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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    return helper(root);
};

const helper=(root, sum)=>{
    if(!root){
        return 0;
    }
    if(root.left && !root.left.right && !root.left.left){
        return root.left.val + helper(root.right);
    }
    return helper(root.left) +helper(root.right)
    
}