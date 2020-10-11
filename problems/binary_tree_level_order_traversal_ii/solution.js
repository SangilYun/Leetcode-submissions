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
var levelOrderBottom = function(root) {
    const result = [];
    if(!root){
        return result;
    }
    const queue =[root];
    while(!!queue.length){
        const size = queue.length;
        const currentLevel = [];
        for(let i=0; i<size; i++){
            const currentNode = queue.shift();
            currentLevel.push(currentNode.val);
            if(currentNode.left){
                queue.push(currentNode.left);
            }
            if(currentNode.right){
                queue.push(currentNode.right)
            }
        }
        //inserting a list at the first index will result in shifting every element for every insultion which is not very efficient.
        // result.unshift(currentLevel);
        result.push(currentLevel);
    }
    
    return result.reverse();
};