/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    return traversal(p,q)
};

const traversal =(p,q) =>{
    if(p === q){
        return true;
    }
    //replace below if statement with optional chaining.
    // if(!p || !q){
    //     return false;
    // }
    if(p?.val !== q?.val){
        return false;
    }

    return traversal(p.right, q.right) && traversal(p.left, q.left);
    
}