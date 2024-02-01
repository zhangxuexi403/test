/**
 * 1.犀牛：函数变量可以保存在函数作用域内
 * 2.高程：有权访问另一个函数作用域中的变量的函数(函数没导出)
 * 3.你不知道的JS：当函数可以记住并访问所在的词法作用域时，就产生闭包，即使函数在当前此法作用域之外执行
 * 4.MDN：一个函数和其周围状态(词法环境)的引用捆绑在一起的时候，这个组合就叫做闭包
 * 5.当函数的执行，导致函数被定义，并抛出
 */
// 高程、犀牛的理解：(函数没导出)
// function foo() {
//   var n = 0;
//   function bar() {
//     console.log(n);
//   }
//   bar();
// }
// foo();

// 你不知道的JS理解：(函数导出)
// function foo() {
//   var n = 0;
//   return function bar() {
//     console.log(n);
//   };
// }
// foo()();

// 通过改变this指向的方式，拿到其他上下文中的变量
// function foo(fn) {
//   var n = 1;
//   fn.call(this, n);
// }
// function test(n) {
//   console.log(n);
// }
// foo(test);

// 先创建全局执行上下文,然后创建作用域链和变量对象
// 把函数组作为值放到任务队列里,在规定时刻回调实际就是创建闭包,也就是回调函数
// 556789
// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i++);
//   }, 4000);
// }
// console.log(i);
//--------------
// 501234
// for (var i = 0; i < 5; i++) {
//   (function (x) {
//     setTimeout(() => {
//       console.log(x++);
//     }, 4000);
//   })(i);
// }
// console.log(i);
