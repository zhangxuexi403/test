/* 
    ?据结构
    数据结构是指互相之间存在着一种或多种关系的数据元素的集合和该集合中数据元素之间的关系组成。
    简单来说，数据结构就是设计数据以何种方式组织并存储在计算机中。
    比如：列表、集合与字典都是一种数据结构。
    N.Wirth:"程序=数据结构+算法"
    ?数据结构的分类
    数据结构按照其逻辑结构可以分为线性结构、树结构、图结构
    线性结构：数据结构中的元素存在一对一的互相关系
    树结构：数据结构中的元素存在一对多的相互关系
    图结构：数据结构中的元素存在多对多的相互关系
    32位机器上，一个整数占4字节，一个地址也占4个字节
    数组和列表有两点不同：1、数组元素类型要相同2、数组长度固定
    想要在列表中存储不同的类型的数据？怎么办？存储的是一个引用
    ?列表/数组
    列表(其他语言称数组)是一种基本数据类型。
    关于列表的问题：
        列表中的元素是如何存储的？
        列表的基本操作：按下标查找、插入元素、删除元素...
        这些操作的时间复杂度是多少？
    扩展：Python的列表是如何实现的？
    ?栈
    栈(Stack)是一个数据集合，可以理解为只能在一端进行插入或删除操作的列表。
    栈的特点：后进先出LIFO(last-in,first-out)
    栈的概念：栈顶、栈底
    栈的基本操作：
        进栈(压栈)：push
        出栈：pop
        取栈顶：gettop
    栈的应用————括号匹配问题
    括号匹配问题：给一个字符串，其中包含小括号、中括号、大括号，求该字符串中的括号是否匹配。
    例如：
        ()()[]{}匹配
        ([{()}])匹配
        [](不匹配
        [(])不匹配
    ?队列
    队列(Queue)是一个数据集合，仅允许在队列的一端进行插入，另一端进行删除。
    进行插入的一段称为队尾(rear)，插入动作称为进队或入队
    进行删除的一段称为队头(front)，删除动作称为出队
    队列的性质：先进先出(First-in,First-out)
    ?队列的实现方式————环形队列（MaxSize是队列大小，环形用一个空位表示结束位）
    环形队列：当对位指针front==MaxSize-1时，再前进一个位置就自动到0.
    队首指针前进：front=(front+1)%MaxSize
    队尾指针前进1：rear=(rear+1)%MaxSize
    队空条件：rear==front
    队满条件：(rear+1)%MaxSize==front
    ?双向队列
    双向队列的两端都支持进队和出队操作
    双向队列的基本操作：
    队首进队
    队首出队
    队尾进队
    队尾出队
*/
class Queue {
  constructor(size = 100) {
    this.size = size; //队列容量
    this.queue = new Array(size); //队列本体
    this.rear = 0; //队尾指针
    this.front = 0; //队首指针
  }
  push(val) {
    if (!this.isFilled()) {
      this.rear = (this.rear + 1) % this.size;
      this.queue[this.rear] = val;
    } else {
      throw new Error('queue is filled.');
    }
  }
  pop() {
    if (!this.isEmpty()) {
      this.front = (this.front + 1) % this.size;
      return this.queue[this.front];
    } else {
      throw new Error('queue is empty.');
    }
  }
  isEmpty() {
    return this.rear === this.front;
  }
  isFilled() {
    return (this.rear + 1) % this.size === this.front;
  }
}
const q = new Queue(5);
for (let i = 0; i < 4; i++) {
  q.push(i);
}

console.log(q); //Queue {size: 5,queue: [ <1 empty item>, 0, 1, 2, 3 ], rear: 4, front: 0}
console.log(q.isFilled()); //true
console.log(q.pop()); //0
q.push(4);
console.log(q); //Queue { size: 5, queue: [ 4, 0, 1, 2, 3 ], rear: 0, front: 1 }
