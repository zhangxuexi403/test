var MinStack = function () {
  this.stack = [];
  this.min_stack = [Infinity];
  return;
};

MinStack.prototype.push = function (x) {
  this.stack.push(x);
  this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x));
  return;
};

MinStack.prototype.pop = function () {
  this.stack.pop();
  this.min_stack.pop();
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.min = function () {
  return this.min_stack[this.min_stack.length - 1];
};
