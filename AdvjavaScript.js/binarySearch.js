//======================Search in a Binary Search Tree 700===================================//

// var searchBST = function(root, val) {
//     let node = root
//     while(node){
//         if(node.val == val){
//             return node
//         }
//         else if( val > node.val){
//             node = node.right
//         }
//         else if(val < node.val){
//             node = node.left
//         }
//     }
//     return null
// };

//=================== 104. Maximum Depth of Binary Tree =====================================//

// var maxDepth = function(root) {
//     if(root == null){
//         return 0
//     }
//     if(root.left == null && root.right == null){
//         return 1
//     }
//     let x = maxDepth(root.left)
//     let y = maxDepth(root.right)
//     let ans = Math.max(x,y) + 1
//     return ans
// };

//=========98. Validate Binary Search Tree============================================//
// var isValidBST = function(root) {
//     let ans = true
//     const loop =(node,min,max)=>{
//         if((node.val> min || min == undefined) &&  (node.val < max || max == undefined)){
//             if(node.left){
//                 loop(node.left,min,node.val)
//             }
//             if(node.right){
//                 loop(node.right,node.val,max)
//             }
//         }
//         else{
//             ans = false
//         }
//     }
//     loop(root)
//     return ans
// };

//=========================938 Range Sum of BST ==========================================//
// var rangeSumBST = function(root, low, high) {
//     let sum =0
//     function dfs(node){
//         if(node===null) return;
//         if(node.val >= low && node.val <= high) sum +=node.val
//         if(node.val > low) dfs(node.left)
//         if(node.val < high) dfs(node.right)
//     }
//     dfs(root)
//     return sum

// };

//===============================2236. Root Equals Sum of Children==================================//
// var checkTree = function(root) {
//     if (root == null) {
//         return false;
//     }
//     if (root.left == null && root.right == null) {
//         return true;
//     }

//     let leftSum = 0, rightSum = 0;

//     if (root.left != null) {
//         leftSum = root.left.val;
//     }

//     if (root.right != null) {
//         rightSum = root.right.val;
//     }

//     return (root.val === leftSum + rightSum) &&
//            checkTree(root.left) &&
//            checkTree(root.right);
// };
