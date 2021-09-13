// todo函数柯里化
// 参数部分求值问题
// 偏函数,固定一部分预设参数,在偏函数的基础上保存一部分参数,通过闭包的方式把参数保存起来,在需要求值的时候,进行一次性求值
// var monthlyCost = 0;
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
// function cost() {
//   var money = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     money += arguments[i];
//   }
//   return money;
// }
// var currying = function (fn) {
//   var arg = [];
//   return function () {
//     [].push.apply(arg, arguments);
//     return fn.apply(this, arg);
//   };
// };
// // 赋予其部分求值的能力
// cost = currying(cost);
// console.log(cost(100));
// console.log(cost(200));
// console.log(cost(300));
// ---------
// 反柯里化
// Function.prototype.uncurrying = function () {
//   var fn = this;
//   return function () {
//     var _this = Array.prototype.shift.call(arguments);
//     return fn.apply(_this, arguments);
//   };
// };
// var push = Array.prototype.push.uncurrying();
// var obj = {};
// // 让push更具备通用性,不具备push的obj也可以使用push
// console.log(push(obj, 'shift', 'second'));
// console.log(obj);
// -----------------

// function uri(protocol, hostname, pathname) {
//   return `${protocol}${hostname}${pathname}`;
// }
// const uri1 = uri('http://', 'www.danlaoshi.com', '/dir');
// console.log(uri1);
// 参数复用----这里是闭包
// function uri_curring(protocal) {
//   console.log(arguments);
//   return function (hostname, pathname) {
//     return `${protocal}${hostname}${pathname}`;
//   };
// }
// const uri_https = uri_curring('https://');
// const uri2 = uri_https('www.danlaoshi.com', '/点赞');
// const uri3 = uri_https('www.danlaoshi.com', '/收藏');
// const uri4 = uri_https('www.danlaoshi.com', '/投币');
// console.log(uri2, uri3, uri4);
// ----------
// 解决兼容问题
// const whichEvent = (function () {
//   if (window.addEventListener) {
//     return function (element, type, listener, useCapture) {
//       // element监听什么元素，type添加什么类型的事件，listener执行的回调函数，useCapture进行事件冒泡或者事件捕获的选择
//       element.addEventListener(
//         type,
//         function (e) {
//           listener.call(element, e);
//         },
//         useCapture
//       );
//     };
//   } else if (window.attachEvent) {
//     return function (element, type, handler) {
//       // 三个参数，因为ie支持事件冒泡
//       element.attachEvent('on' + type, function (e) {
//         handler.call(element, e);
//       });
//     };
//   }
// })();
// 延迟执行，在某些情况就是对参数复用功能进行改进
// 传入参数的时候不能进行限定，也不能丢失传入的参数，什么时候传入参数都可以，现在传入的参数可以为后面一起进行使用
// 不能无脑的不断进行返回函数的操作了
// 首先传入一个参数,因为参数不确定,不设置形参
// 并且把保存参数的aruguments赋值给args变量保存起来,也就是第一个括号里面的参数
// 然后再函数里面定义一个内部函数inner,这个内部函数起始就是接收第二次传入的参数,也就是第二个括号
// 然后把第二个括号的参数加入到第一个括号的参数里面
// 最后再返回这个内部函数实现基本的柯里化
// 每增加一个括号.都需要增加一个内部函数1,需要预先增加无数多个内部函数是不现实的,需要无数多个补丁数量的内部函数,可以使用递归来解决
// 因为内部函数已经返回了内部函数,很难再返回一个额外的结果到外部
// 控制台显示的是返回的函数,这段内容是以字符串形式返回的,原本的函数被转换为字符串显示了,发生了隐式转换,发生隐式转换是调用内部的toString方法
// function add() {
//   let args = Array.prototype.slice.call(arguments); //转化为数组
//   let inner = function () {
//     args.push(...arguments);
//     return inner;
//   };
//   inner.toString = function () {
//     return args.reduce((pre, cur, array) => {
//       return pre + cur;
//     });
//   };
//   return inner;
// }
// const result = add(1)(2)(3)(4);
// console.log(typeof result);
// console.log(result.toString());
// profession职业
// 两个数组里面都是由对象组合成的元素集合,但是两个对象的键值对设置名字是不一样的
// 如果我们单纯只想获取两个数组里面的名字,用数组的map方法就可以实现了
// 问题在于如果有很多个不同的数组,他们里面对象的键值对名字都不一样,这样书写代码就不太友好了,
// 可以创建一个柯里化箭头函数,命名为curring,先传入第一个参数name,再返回一个箭头函数,同时传入第二个参数element,然后再以中括号的行书读取数组元素
const nameList1 = [
  { mid: '沙皇', profession: '中单' },
  { mid: '发条', profession: '中单' },
  { mid: '拉克丝', profession: '中单' },
  { mid: '球女', profession: '中单' }
];
const nameList2 = [
  { adc: '轮子妈', profession: 'ADC' },
  { adc: 'VN', profession: 'ADC' },
  { adc: '老鼠', profession: 'ADC' }
];
const curring = name => element => element[name];
// 等价于
// const curring = function (name) {
//   return function (element) {
//     return element[name];
//   };
// };
// 参数的复用,如果很多参数是同名的,这样书写非常有用,因为map李就是要传入一个函数,而且map会遍历数组里面的每个元素
// 在这里是遍历每一个对象,因为传入的参数是特别制作的,这个函数因为map被自动执行了,并且传入相应的两个参数
const name_mid = curring('mid');
const name_adc = curring('adc');
console.log(nameList1.map(name_mid));
console.log(nameList2.map(name_adc));
// console.log(nameList1.map(hero => hero.mid));
// console.log(nameList2.map(hero => hero.adc));
