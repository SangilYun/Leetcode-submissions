// Given a binary search tree, rearrange the tree such that it forms a linked list where all its values are in ascending order.
// Ex: Given the following tree...
//         5
//        / \
//       1   6
// return...
// 1
//  \
//   5
//    \
//     6

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }

  printTree(root) {
    if (!root) {
      return null;
    }
    this.printTree(root.left);
    console.log("print tree", root.val);
    this.printTree(root.right);
  }
}

const preOrder = (root, arr) => {
  if (!root) {
    return null;
  }

  preOrder(root.left, arr);
  arr.push(root.val);
  preOrder(root.right, arr);
};

//test1
const Tree1 = new TreeNode(5);
Tree1.left = new TreeNode(1);
Tree1.right = new TreeNode(6);

const arr1 = [];
preOrder(Tree1, arr1);
console.log("arr", arr1);

//test2
const Tree2 = new TreeNode(5);
Tree2.left = new TreeNode(2);
Tree2.right = new TreeNode(9);
Tree2.left.left = new TreeNode(1);
Tree2.left.right = new TreeNode(3);

const arr2 = [];
preOrder(Tree2, arr2);
console.log("arr", arr2);

//test3
const Tree3 = new TreeNode(5);
Tree3.right = new TreeNode(6);

const arr3 = [];
preOrder(Tree3, arr3);
console.log("arr", arr3);
