/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return helper(root, -Infinity, Infinity);
};

function helper(root, min, max){
    if(!root) return true;
    if(root.val <= min || root.val >= max) return false;
    if(!helper(root.left, min, root.val) || !helper(root.right, root.val, max)) return false;
    
    return true;
}

/*
var isValidBST = function(root) {
    let list =[];
    helper(root, list);
    for(let i=0; i<list.length-1; i++){
        if(list[i] >= list[i+1]) return false;
    }
    return true;
};

function helper(root, list){
    if(!root) return null;
    helper(root.left, list);
    list.push(root.val);
    helper(root.right, list);
}
*/