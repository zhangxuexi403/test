class LinkedList {
  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head; //新建一个空链表，尾节点就是头节点
  }
  //在链表尾插入一个数
  insert(value) {
    const node = { value, next: null }; //创建一个节点
    this.tail.next = node; //把tail的next属性设置为新节点的引用
    this.tail = node; //新节点是现在的尾节点
  }
  removeNode(val) {
    let currentNode = this.tail; //从head开始
    let previousNode; //我们需要保留对上一个节点的引用
    while (currentNode) {
      // 如果发现自己想要的哪个值，那么就退出循环
      if (currentNode.value === val) {
        break;
      }
      // 如果没有找到想要的那个值，就将currentNode设置为previousNode
      previousNode = currentNode;
      // 得到下一个节点并将其分配给currentNode
      currentNode = currentNode.next;
    }
    // 返回undefined,因为没有找到具有该值的节点
    if (currentNode === null) {
      return false;
    }
    // 如果节点是head，那么将head设置为头节点的下一个值
    if (currentNode === this.head) {
      this.head = this.head.next;
      return;
    }
    // 通过将节点设置为前面的节点来删除节点(跳过当前节点)
    previousNode.next = currentNode.next;
  }
  removeTail() {
    let currentNode = this.head;
    let previousNode;
    while (currentNode) {
      if (!currentNode.next) {
        break;
      }
      // 获取先前节点的引用
      previousNode = currentNode;
      // 移至下一个节点
      currentNode = currentNode.next;
    }
    // 要删除尾部，将previousNode.next设置为null
    previousNode.next = null;
  }
}
const link = new LinkedList(1);
console.log(link);
link.insert(2);
console.log(link);
