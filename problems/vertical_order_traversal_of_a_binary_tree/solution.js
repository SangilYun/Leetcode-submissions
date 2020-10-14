/*
Given a binary tree, return its column order traversal from top to bottom and left to right. Note: if two nodes are in the same row and column, order them from left to right.

Ex: Given the following tree…

    8
   / \
  2   29
     /  \
    3    9
return [[2], [8, 3], [29], [9]]
Ex: Given the following tree…

     100
    /   \
  53     78
 / \    /  \
32  3  9    20
return [[32], [53], [100, 3, 9], [78], [20]]
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
var verticalTraversal = function(root) {
    const result =[];
    if(!root){
        return result;
    }
    const map = new Map();
    const stack = [root];
    const columns = [0];
    let min = 0;
    let max= 0;
    while(!!stack.length){
        const size = stack.length;
        const currentLevel = new Map();
        for(let i=0; i<size; i++){
            const currentNode = stack.shift();
            const column = columns.shift();
            
            
            if(!currentLevel.has(column)){
                currentLevel.set(column, []);
            }
            currentLevel.get(column).push(currentNode.val);
            
            if(currentNode.left){
                stack.push(currentNode.left);
                columns.push(column-1);
                min = Math.min(min, column-1);
            }
            if(currentNode.right){
                stack.push(currentNode.right);
                columns.push(column+1);
                max = Math.max(max, column+1);
            }
        }
        
        currentLevel.forEach((nodes, column)=>{
            if(!map.has(column)){
                map.set(column, []);
            }
            map.get(column).push(...nodes.sort((a,b)=>a-b));
        })
    }

    for(let i= min; i<=max; i++){
        result.push(map.get(i));
    }
    return result;
};
//[0,5,1,9,null,2,null,null,null,null,3,4,8,6,null,null,null,7] not same row
//[0,2,1,3,null,null,null,4,5,null,7,6,null,10,8,11,9] same row