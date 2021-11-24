// 闭包练习1，上级作用域取决于在哪里创建的
// var a = 9;
// function fn() {
//   a = 0;
//   return function (b) {
//     return b + a++;
//   };
// }
// var f = fn(); //这个f占了位置，永远不销毁
// console.log(f(5)); //5
// console.log(fn()(5)); //5这个是返回函数执行一次，所以临时不销毁，当返回的函数执行完了再销毁
// console.log(f(5)); //6
// console.log(a); //2
// -------------------
// 闭包练习2
// function fn(i) {
//   return function (n) {
//     console.log(n + i++);
//   };
// }
// var f = fn(10); //生成一个不销毁的闭包
// f(20); //20+10
// fn(20)(40); //60
// fn(30)(50); //80
// f(30); //30+(11++)
// -------------------
// 闭包练习3
// var i = 0;
// function fn() {
//   return function (n) {
//     console.log(n + ++i);
//   };
// }
// var f = fn(); //生成一个不销毁的闭包
// f(20); //20+(++0) === 21; 全局i=1;
// fn()(20); //20+(++1) === 22
// fn()(30); //30+(++2) === 33
// f(30); //30+(++3) === 34
// ----------------------
// 闭包练习4
// var ary = [1, 2, 3, 4];
// function fn(ary) {
//   //形参的ary和全局的ary共用一个堆引用地址
//   ary[0] = 0;
//   ary = [0]; //开辟一块新的内存，引用不会销毁
//   ary[0] = 100;
//   return ary;
// }
// var res = fn(ary); //
// console.log(ary); //[ 0, 2, 3, 4 ]
// console.log(res); //[ 100 ]
// ------------
// 闭包练习5
// function fn(i) {
//   return function (n) {
//     console.log(n + i++);
//   };
// }
// var f = fn(10);
// f(20); //20+(10++) === 30
// fn(20)(40); //40+(20++) === 60
// fn(30)(50); //50+(30++) === 80
// f(30); //30+(11++) === 41
// ------------
// 闭包练习6
// var i = 10;
// function fn() {
//   return function (n) {
//     console.log(n + ++i);
//   };
// }
// var f = fn();
// f(20); //20+(++10) === 31
// fn()(20); //20+(++11) === 32
// fn()(30); //30+(++12) === 43
// f(30); //30+(++13) === 44
// ------------
// 闭包练习7
// var test = (function (i) {
//   return function () {
//     alert((i *= 2));
//   };
// })(2);
// test(5); // => 4
// ------------
// 闭包练习8
// var a = 1;
// var obj = {
//   name: 'tom'
// };
// function fn() {
//   var a2 = a;
//   obj2 = obj;
//   a2 = a;
//   obj2.name = 'jack';
// }
// fn();
// console.log(a); //1
// console.log(obj); //jack
// ------------
// 闭包练习9
// var a = 1;
// function fn(a) {
//   console.log(a); //=>function a() {}
//   var a = 2; //声明无效，已存在a
//   function a() {} //生命无效，但是赋值有效
//   console.log(a); //=>2
// }
// fn(a);
// ------------
// 闭包练习10--函数重构
// var a = 0,
//   b = 0;
// function A(a) {
//   A = function (b) {
//     // alert(a + b++);
//     console.log(a + b++);
//   };
//   // alert(a++);
//   console.log(a++);
// }
// A(1); //1
// A(2); //4
// ------------
// 闭包练习11
function fun(n, o) {
  console.log(o);
  return {
    fun: function (m) {
      return fun(m, n);
    }
  };
}
var c = fun(0).fun(1); //undefined,0
c.fun(2); //1
c.fun(3); //1
