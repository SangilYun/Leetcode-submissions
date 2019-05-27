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
    let dfsList = dfs(root, []);
    console.log('dfsList', dfsList);
    for(let i=0; i<dfsList.length-1; i++){
        if(dfsList[i] >= dfsList[i+1]){
            return false;
        }
    }
    return true;
};

function dfs(root, list){
    if(!root){
        return false;
    }
    if(root.left){
        dfs(root.left, list)
    }
    list.push(root.val);
    if(root.right){
        dfs(root.right, list)
    }
    return list;
}
    