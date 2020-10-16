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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const list = [];
    if(!root){
        return list;
    }
    pathFinder(root, list, '' );
    
    return list;
};

const pathFinder = (root, list, path)=>{
    if(!root.left && !root.right){
        path += root.val
        list.push(path);
    }
    if(root.left){
        pathFinder(root.left, list, path+root.val +'->');
    }
    if(root.right){
        pathFinder(root.right, list, path+root.val +'->');
    }
}