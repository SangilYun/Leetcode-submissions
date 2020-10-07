/*
Given a binary search tree, return its mode (you may assume the answer is unique). If the tree is empty, return -1. Note: the mode is the most frequently occurring value in the tree.

Ex: Given the following tree...

        2
       / \
      1   2
return 2.

Ex: Given the following tree...

         7
        / \
      4     9
     / \   / \
    1   4 8   9
               \
                9  
return 9.
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
var findMode = function(root) {
    const map = traversal(root, new Map());
    let maxCount = Number.MIN_VALUE;
    
    //find the maximum count
    for([val, count] of map.entries()){
        if(maxCount < count){
            maxCount = count;    
        }
    }
    
    //collect maximum count values
    const mode = [];
    for([val, count] of map.entries()){
        if(count === maxCount){
            mode.push(val);
        }
    }

    return mode;
};

const traversal=(root, map)=>{
    if(!root){
        return map;
    }
    traversal(root.left, map);
    map.get(root.val) ? map.set(root.val, map.get(root.val)+1) : map.set(root.val,1);
    traversal(root.right, map);
    
    return map;
}


// Runtime: O(N) where N is the number of nodes in our tree. Space complexity: O(N) where N is the number of nodes in our tree.