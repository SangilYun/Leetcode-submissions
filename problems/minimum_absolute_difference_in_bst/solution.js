/*
Given a binary search tree, return the minimum difference between any two nodes in the tree.

Ex: Given the following tree...
        2
       / \
      3   1
return 1.

Ex: Given the following tree...
        29
       /  \
     17   50
    /     / \
   1    42  59
return 8.

Ex: Given the following tree...
        2
         \
         100
return 98.
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

var getMinimumDifference = function(root) {
    const arr = inOrder(root, []); //array will be sorted incrementally because of inorder traversal.
    
    let min = Number.MAX_VALUE;
    for(let i=0; i<arr.length-1; i++){
        const diff = arr[i+1] - arr[i];
        min = Math.min(min, diff);
    }
    return min;
};



//convert tree in to array
const inOrder = (root, arr) =>{
    if(!root){
        return null;
    }
    inOrder(root.left, arr);
    arr.push(root.val);
    inOrder(root.right, arr);
    
    return arr;
}