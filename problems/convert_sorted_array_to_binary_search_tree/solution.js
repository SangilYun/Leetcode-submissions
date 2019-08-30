/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(!nums.length) return null;
    let m = Math.floor(nums.length/2);
    let root = new TreeNode(nums[m]);
    root.left = sortedArrayToBST(nums.slice(0, m));
    root.right = sortedArrayToBST(nums.slice(m+1));
    return root;
    
};