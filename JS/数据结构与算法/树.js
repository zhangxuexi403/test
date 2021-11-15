/* 
    ?树与二叉树
    树是一种数据结构。比如：目录结构
    树是一种可以递归定义的数据结构
    树是由n个节点组成的集合：
        如果n=0，那么这是一颗空树
        如果n>0，那存在1个节点作为树的跟系欸但，其他节点可以分为m个集合，每个集合本身又是一棵树。
    ?二叉树
    二叉树的链式存储：将二叉树的节点定义为一个对象，节点之间通过类似链表的链接方式来链接
    ?二叉树的遍历方式
    [E,A,G,null,C,null,F,null,null,B,D]
    前序遍历EACBDGF
    中序遍历ABCDEGF
    后序遍历BDCAFGE
    层序遍历EAGCFBD
    已知两种序列，可以推出整棵树
    ?二叉搜索树
    二叉搜索树是一颗二叉树且满足性质：设x是二叉树的一个节点。
    如果y是x左子树的一个节点，那么y.key<=x.key；
    如果y是x右子树的一个节点y.key>=x.key。
    二叉搜索树的操作：查询、插入、删除。
    ?二叉搜索树的效率
    平均情况下，二叉搜索树进行搜索的时间复杂度为O(logn)
    最坏情况下，二叉搜索树可能非常偏斜
    解决方案：随机化插入、AVL树
    ?AVL树
    AVL树：AVL树是一颗自平衡的二叉搜索树。
    AVL树具有以下性质：
      根的左右子树的高度之差的绝对值不能超过1
      根的左右子树都是平衡二叉树
    ?AVL树————插入
    插入一个节点可能会破坏AVL树的平衡，可以通过旋转操作来进修正。
    插入一个节点后，只有从插入节点到根节点的路径上的节点的平衡可能被改变。我们需要子树的高度差2.
    不平衡的出现可能有4种情况。
    ?AVL插入————左旋
    不平衡是由于队K的有孩子的右子树插入导致的：左旋
    不平衡是由于队K的左孩子的左子树插入导致的：右旋

*/
const tree = {
  val: 'E',
  left: {
    val: 'A',
    left: null,
    right: {
      val: 'C',
      left: { val: 'B', left: null, right: null },
      right: { val: 'D', left: null, right: null }
    }
  },
  right: { val: 'G', left: null, right: { val: 'F', left: null, right: null } }
};
// 递归写法的前序遍历
const preorder = root => {
  if (!root) {
    return;
  }
  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
};

console.log(preorder(tree));
