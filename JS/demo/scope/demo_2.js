// 练习1
// var foo = 1;
// function bar() {
//   if (!foo) {
//     var foo = 10; //此处用var没有块级作用域，不论条件是否成立，都要进行变量声明提升
//   }
//   console.log(foo);
// }
// bar(); // =>10
// ------------------
// 练习2
// var n = 0;
// function a() {
//   var n = 10;
//   function b() {
//     n++;
//     console.log(n);
//   }
//   b();
//   return b;
// }
// var c = a();
// c();
// console.log(n); // =>11、12、0
// 1.函数执行形成私有作用域:私有和全局变量
// 2.作用域链的查找机制:看当前函数是在哪个作用域下创建的,和在哪执行没关系(js是静态语言)
// 3.栈内存释放问题:一般执行完就释放了,但是如果里边的某些东西呗栈以外的其他事务占用了,则不能销毁
// -------------------
// 练习3
// var a = 10,
//   b = 11,
//   c = 12;
// function test(a) {
//   a = 1; //这个改变是形参，私有a
//   var b = 2; //改变当前私有的b
//   c = 3; //这个改变的是全局的c
// }
// test(10);
// console.log(a);
// console.log(b);
// console.log(c);
// -----------------------
// 练习4
// if (!('a' in window)) {
//   var a = 1;//声明提升不需要管if对错
// }
// console.log(a); // => undefined
// ---------
// 练习5(在非严格模式下，arguments和形参存在映射关系，一个改都会跟着改)
// var a = 4;
// function b(x, y, a) {
//   console.log(a); //3
//   arguments[2] = 10; //形参a为10
//   console.log(a); //10
// }
// a = b(1, 2, 3);
// console.log(a); //undefined
// ------------
// 练习6
// var a = 10,
//   b = 11,
//   c = 12;
// function test(a) {
//   a = 1;
//   var b = 2;
//   c = 3;
// }
// test(10);
// console.log(a); //10
// console.log(b); //11
// console.log(c); //3
// ---
const a = [{ id: 1 }, { id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }];
// const b = a.filter((item, index) => {
//   return a.findIndex(item2 => item.id == item2.id) == index;
// });
const b = a.filter((item, index) => {
  console.log('itemitem');
  return a.findIndex(item2 => item2.id === item.id);
});
console.log(b);
