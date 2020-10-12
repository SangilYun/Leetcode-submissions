/*
Given an n-ary tree, return its level order traversal.
Note: an n-ary tree is a tree in which each node has no more than N children.

Ex: Give the following n-ary tree…

    8
  / | \
 2  3  29
return [[8], [2, 3, 29]]
Ex: Given the following n-ary tree…

     2
   / | \
  1  6  9
 /   |   \
8    2    2
   / | \
 19 12 90
return [[2], [1, 6, 9], [8, 2, 2], [19, 12, 90]]
*/


/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result =[];
    if(!root){
        return result;
    }
    const stack = [root];
    while(!!stack.length){
        const size = stack.length;
        const currentLevel = [];
        for(let i=0; i<size; i++){
            const currentNode = stack.shift();
            currentLevel.push(currentNode.val);
            if(currentNode.children){
                stack.push(...currentNode.children)
            }
        }
        result.push(currentLevel);
    }
    return result;
};