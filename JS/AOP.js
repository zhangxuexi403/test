//函数式编程---AOP面向切面编程
Function.prototype.before = function (beforeFn) {
  var _this = this;
  return function () {
    beforeFn.call(this, ...arguments);
    _this.call(this, ...arguments); //中间函数
  };
};
Function.prototype.after = function (afterFn) {
  var _this = this;
  return function () {
    _this.call(this, ...arguments); //中间函数
    afterFn.call(this, ...arguments);
  };
};

var obj = { test: test };
function test() {
  console.log(this, ...arguments);
  console.log(2);
}
test = obj.test
  .before(function () {
    console.log(this, ...arguments);
    console.log(1);
  })
  .after(function () {
    console.log(this, ...arguments);
    console.log(3);
  });
test.call(obj, 1, 2, 3);
