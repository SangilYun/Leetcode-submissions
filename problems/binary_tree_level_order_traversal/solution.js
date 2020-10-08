/*
Given a binary tree, return its level order traversal where the nodes in each level are ordered from left to right.

Ex: Given the following tree...

    4
   / \
  2   7
return [[4], [2, 7]]
Ex: Given the following tree...

    2
   / \
  10  15
        \
         20
return [[2], [10, 15], [20]]
Ex: Given the following tree...

    1
   / \
  9   32
 /      \
3        78
return [[1], [9, 32], [3, 78]]
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const level = [];
    if(!root){
        return level;
    }
    const queue = [];
    queue.push(root);
    while(!!queue.length){
        const size = queue.length
        const currentLevel = [];
        for(let i=0; i<size; i++){
            const currentNode = queue.shift();
            currentLevel.push(currentNode.val);
            if(currentNode.left){
                queue.push(currentNode.left);
            }
            if(currentNode.right){
                queue.push(currentNode.right);
            }
        }
        
        level.push(currentLevel);        
    }
    return level;
};