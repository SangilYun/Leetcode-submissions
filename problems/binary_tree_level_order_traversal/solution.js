/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let lists = [];
    helper(root, lists, 0);
    return lists;
};

function helper(root, lists, depth){
    if(!root) return null;
    let list = [];
    if(lists.length === depth){
        lists.push(list);
    }else{
        list = lists[depth];
    }
    list.push(root.val);
    helper(root.left, lists, depth+1);
    helper(root.right, lists, depth+1);
}


