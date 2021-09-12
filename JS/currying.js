// todo函数柯里化
// 参数部分求值问题
// 偏函数,固定一部分预设参数,在偏函数的基础上保存一部分参数,通过闭包的方式把参数保存起来,在需要求值的时候,进行一次性求值
var monthlyCost = 0;
// function cost(money) {
//   monthlyCost += money;
// }
// ------------
// var cost = (function () {
//   var arg = [];
//   return function () {
//     if (arguments.length === 0) {
//       var money = 0;
//       for (let i = 0; i < arg.length; i++) {
//         money += arg[i];
//       }
//     } else {
//       [].push.apply(arg, arguments);
//     }
//     return money;
//   };
// })();
// cost(100);
// cost(200);
// cost(300);
// console.log(cost());
// ---------------
function cost() {
  var money = 0;
  for (let i = 0; i < arguments.length; i++) {
    money += arguments[i];
  }
  return money;
}
var currying = function (fn) {
  var arg = [];
  return function () {
    [].push.apply(arg, arguments);
    return fn.apply(this, arg);
  };
};
// 赋予其部分求值的能力
cost = currying(cost);
// console.log(cost(100));
// console.log(cost(200));
// console.log(cost(300));
// ---------
// 反柯里化
Function.prototype.uncurrying = function () {
  var fn = this;
  return function () {
    var _this = Array.prototype.shift.call(arguments);
    return fn.apply(_this, arguments);
  };
};
var push = Array.prototype.push.uncurrying();
var obj = {};
// 让push更具备通用性,不具备push的obj也可以使用push
console.log(push(obj, 'shift', 'second'));
console.log(obj);
