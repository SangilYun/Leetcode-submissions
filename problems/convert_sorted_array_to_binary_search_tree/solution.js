/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(!nums.length){
        return null;
    }

    return traversal(nums, 0, nums.length-1);
    
};

const traversal = (nums, startIndex, endIndex)=>{
    if(startIndex > endIndex){
        return null;
    }
    const middleIndex = Math.ceil((startIndex+endIndex)/2);
    const root = new TreeNode(nums[middleIndex]);
    root.right = traversal(nums, middleIndex+1, endIndex);
    root.left = traversal(nums, startIndex, middleIndex-1);
    
    return root;
}