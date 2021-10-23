class Stack {
  constructor() {
    // 创建栈数据结构，这是一个空对象
    this._storage = {};
    this.length = 0;
  }
  push(value) {
    this._storage[this._length] = value;
    this._length++;
  }
  pop() {
    const lastVal = this._storage[--this._length];
    delete this._storage[--this._length];
    this._length--;
    return lastVal;
  }
  // peek查看栈中的最后一项
  peek() {
    const lastVal = this._storage[--this._length];
    return lastVal;
  }
}

class Queue {
  constructor() {
    this.queue = {};
    this.length = 0;
    this.head = 0; //跟踪头部的新变量
  }
  // 向队尾添加元素
  enqueue(value) {
    // 使用value参数将length+head的键添加到对象
    this.queue[this.length + this.head] = value;
    this.length++;
  }
  //从队首移除元素
  dequeue() {
    const firstVal = this.queue[this.head];
    delete this.queue[this.head];
    this.length--;
    this.head++;
    return firstVal;
  }
  peek() {
    return this.queue[this.head];
  }
}
