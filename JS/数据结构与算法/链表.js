/* 
    ?链表
    链表是由一系列节点组成的元素集合。每个节点包含两部分，数据域item和指向下一个节点的指针next。
    通过节点之间的互相链接，最终串联成一个链表。
    ?创建链表
    头插法
    尾插法
    ?双链表
    双链表的每个节点由两个指针：一个指向后一个节点，另一个指向前一个节点。
    如何建立双链表？
    ?双链表的插入
    p.next = curNode.next 
    curNode.next.prior = p
    p.prior = curNode
    curNode.next = p
    ?双链表节点的删除
    p = curNode.next 
    curNode.next = p.next 
    p.next.prior = curNode
    del p 
    ?链表————复杂度分析
    顺序表(列表/数组)与链表
    按元素值查找 O(n)：O(n)
    按下标查找   O(1)：O(n) ,数组查询地址所以是O(1)
    在某元素后插入 O(n)：O(1) ,数组需要往前后挪动其后的元素，所以是O(n)
    删除某元素 O(n)：O(1), 数组需要往前后挪动其后的元素，所以是O(n)
    ?链表与顺序表
    链表在插入和删除的操作上明显快于顺序表
    链表的内存可以灵活的分配
    试利用链表重新实现栈和队列
    链表这种链式存储的数据结构队树和图的结构有很大的启发性
*/
class Node {
  constructor(val) {
    this.val = val || null;
    this.next = null;
  }
}
// 1.头插法
function create_linklist_head(li) {
  let head = new Node(); //从null开始头插入
  for (const element of li) {
    let node = new Node(element);
    node.next = head;
    head = node;
  }
  return head;
}
// 2.尾插法
function create_linklist_tail(li = []) {
  let head = new Node(li[0]);
  let tail = head;
  for (let i = 1; i < li.length; i++) {
    let node = new Node(li[i]);
    tail.next = node;
    tail = node;
  }
  return head;
}
function print_linklist(lk) {
  while (lk) {
    console.log(lk.val);
    lk = lk.next;
  }
}
// var a = new Node(1);
// var b = new Node(2);
// var c = new Node(3);
// a.next = b;
// b.next = c;
// console.log(a);
// var lk = create_linklist_head([1, 2]);
// var lk = create_linklist_tail([1, 2, 3, 6, 8]);
// var lk = create_linklist_tail([1, 2, 3]);
// var lk = create_linklist_tail();
// console.log(lk);
// print_linklist(lk);
