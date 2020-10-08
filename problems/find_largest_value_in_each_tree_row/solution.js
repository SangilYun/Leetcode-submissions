/* Given a binary tree, return the largest value in each of its levels. Ex: Given the following tree…

    2
   / \
  10  15
        \
         20
return [2, 15, 20]
Ex: Given the following tree…

          1
         / \
        5   6
       / \   \  
      5   3   7 
return [1, 6, 7]
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
var largestValues = function(root) {
    if(!root){
        return [];
    }
    const queue = [];
    const maxValues = [];
    queue.push(root);
    while(!!queue.length){
        const currentLevel = [];
        const size = queue.length;
        let max = -Infinity;
        
        for(i=0; i<size; i++){
            const currentNode = queue.shift();
            max = Math.max(currentNode.val, max);
            
            if(currentNode.right){
                queue.push(currentNode.right);
            }
            if(currentNode.left){
                queue.push(currentNode.left);
            }
        }
        
        maxValues.push(max);
        
    }
    return maxValues;
};