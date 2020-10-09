/*
Given a binary tree return all the values you’d be able to see if you were standing on the left side of it with values ordered from top to bottom.

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---

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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const queue = [];
    if(!root){
        return queue;
    }
    
    queue.push(root);
    const result =[];
    while(!!queue.length){
        
        const currentLevelSize = queue.length;
        result.push(queue[0].val)
        for(let i=0; i<currentLevelSize; i++){
            const currentNode = queue.shift();
            if(currentNode.right){
                queue.push(currentNode.right);
            }
            if(currentNode.left){
                queue.push(currentNode.left);
            }
        }
        
    }
    return result;
};