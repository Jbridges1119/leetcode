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
 * @return {TreeNode}
 */

 const tree = {"val":4,
 "left": {
   "val":2,
   "left":{
     "val":1,
     "left":null,
     "right":null
   },
   "right":{
     "val":3,
     "left":null,
     "right":null
   }
 },
 "right": {
   "val":7,
   "left":{
     "val":6,
     "left":null,
     "right":null
   },
   "right":{
     "val":9,
     "left":null,
     "right":null
   }
 }
}
// 1) Make base care - no node return null
// 2) Save left to temp - set left to right - set right to temp
// 3) run function down left side of tree
// 4) run function down right side of tree
// 5) return reversed node
 var invertTree = function(root) {
  //Base Case - nothing returns null
    if (root === null) return null
    //save left to temp
    let temp = root.left;
    //save right to left
    root.left = root.right;
    //save temp to right
    root.right = temp;
  //run recursively down left side then right
    invertTree(root.left);
    invertTree(root.right);
  //return reversed root
    return root
};

