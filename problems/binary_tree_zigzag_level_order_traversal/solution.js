/*
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
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
var zigzagLevelOrder = function(root) {
    const result=[];
    if(!root){
        return result;
    }
    const stack = [root];
    let levelCount = 1;
    while(!!stack.length){
        const size = stack.length;
        const currentLevel = [];
        
        for(let i=0; i<size; i++){    
            const currentNode = stack.shift();
            currentLevel.push(currentNode.val);
            if(currentNode.left){
                stack.push(currentNode.left);
            }
            if(currentNode.right){
                stack.push(currentNode.right);
            }
        }
        
        if(levelCount % 2 ===0){
            currentLevel.reverse();
        }
        
        levelCount++;
        result.push(currentLevel);
    }
    return result;
};