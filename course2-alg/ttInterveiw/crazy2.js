//preorder, inorder, postorder
/* 前序位置的代码在刚刚进入一个二叉树节点的时候执行；
 * 后序位置的代码在将要离开一个二叉树节点的时候执行；
 * 中序位置的代码在一个二叉树节点左子树都遍历完，即将开始遍历右子树的时候执行。
 * */
/* 1. pre orderTraverse */
let res = [];
function traverse(root) {
    if (root === null) {
        return;
    }
    // 前序位置
    res.push(root.val);
    traverse(root.left);
    traverse(root.right);
}
/*2. pre order recursion method logO(n^2)*/
function preorder(root) {
    let arr = [];
    if (root == null) return arr;
    arr.push(root.val);
    arr.push(...preorder(root.left));
    arr.push(...preorder(root.right));
}
/* 3.level order traverse*/
let res1 = [];
function leverOrderTraverse(root) {
    let queue = [];
    queue.push(root);
    while (queue.length != 0) {
        res1.push(queue.shift(root.val));
        if (root.left != null)
            queue.push(root.left);
        if (root.right != null)
            queue.push(root.right);
    }
    return res1;
}

//the maximum depth
/* 1. traverse method*/
let depth = 0;
let res2 = 0;
function fetchDepth(root) {
    traverse(root);
    return res2;
}
function traverse(root) {
    if (root === null) return;
    depth++;
    //at the preorder position to count depth
    if (root.left == null && root.right == null)
        res = Math.max(res, depth);
    traverse(root.left);
    traverse(root.right);
    depth--;
}
/* 2. dp method*/
function maxDepth(root) {
    //how to write a dp function? only focus on itself
    if (root === null)
        return 0;
    let leftMax = maxDepth(root.left);
    let rightMax = maxDepth(root.right);
    //at the post-order position means each time complete the last subtree +1
    return math.Max(leftMax, rightMax) + 1;
}

//dp application
/*1. if is Balanced tree (not more than 1)*/
var isBalanced = function (root) {
    if (root == null) return true;
    if (dp(root) == -1) return false;
    return true;
}
function dp(root) {
    if (root == null) return 0;
    let leftHeight = dp(root.left);
    let rightHeight = dp(root.right);
    //sub-tree is not balanced
    if (leftHeight == -1 || rightHeight == -1)
        return -1;
    //parent-tree is not balanced
    if (Math.abs(leftHeight - rightHeight) > 1)
        return -1;
    //each time add a depth is itself's depth
    return Math.max(leftHeight, rightHeight) + 1;
}
/* 2. min depth*/
var minDepth = function (root) {
    if (root == null)
        return 0;
    return dp(root);
};
function dp(root) {
    if (root === null)
        return 0;
    if (root.left == null && root.right == null)
        return 1;
    else if (root.left == null && root.right != null) {
        return dp(root.right) + 1;
    }
    else if (root.left != null && root.right == null) {
        return dp(root.left) + 1;
    }

    let left = dp(root.left);
    let right = dp(root.right);
    return Math.min(left, right) + 1;
}
/* 3. equals target*/
var hasPathSum = function (root, targetSum) {
    //traverse function
    if (root === null) return false;
    if(root.left === null && root.right === null){
        return root.val == targetSum;
    }
    return hasPathSum(root.left, targetSum - root.val)||
    hasPathSum(root.right, targetSum - root.val);   
};
/*4. dp triangle [[1],[1,2,1]]*/
var generate = function (numRows) {
    if (numRows === 0)
        return [];
    if(numRows === 1)
        return [[1]];
    let prevRows = generate(numRows - 1);
    let prevRow = prevRows[prevRows.length - 1];
    let currentRow = [1];
    for(let i = 1; i < numRows - 1; i++){
        currentRow.push(prevRow[i - 1] + prevRow[i]);
    }
    currentRow.push(1);
    prevRows.push(currentRow);

    return prevRows;
}


