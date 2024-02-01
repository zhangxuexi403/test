var CQueue = function () {
  this.stack1 = []; //入队栈
  this.stack2 = []; //出队栈
};
CQueue.prototype.appendTail = function (value) {
  this.stack1.push(value); //数据入队
};
CQueue.prototype.deleteHead = function () {
  if (this.stack2.length) {
    return this.stack2.pop();
  } else {
    // 出队栈无数据用进队栈补充
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
    // 出队入队都为空则返回-1，否则出队栈继续工作
    if (!this.stack2.length) {
      return -1;
    } else {
      return this.stack2.pop();
    }
  }
};
