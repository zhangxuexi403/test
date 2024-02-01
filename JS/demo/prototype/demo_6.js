// let a = 1;
// function Fn() {
//   this.a = a;
// }
// Fn.prototype.say = function () {
//   this.a = 2;
// };
// Fn.prototype = new Fn();
// let f1 = new Fn();
// Fn.prototype.b = function () {
//   this.a = 3;
// };
// console.log(f1.a); // 1
// console.log(f1.prototype); // undefined,因为prototype是类专有的
// console.log(f1.b); //{function(){this.a=3}}
// console.log(f1.hasOwnProperty('b')); //false
// console.log('b' in f1); //true
// console.log(f1.constructor == Fn); //Fn
// f1.say(); // => 将f1实例中的a变成2
// -------------------
// ~(function () {
//   function checkX(x) {
//     x = Number(x);
//     return isNaN(x) ? 0 : x;
//   }
//   function plus(x) {
//     x = checkX(x);
//     return this + x;
//   }
//   function minus(x) {
//     x = checkX(x);
//     return this - x;
//   }
//   Number.prototype.plus = plus;
//   Number.prototype.minus = minus;
// })();
// let n = 10;
// let m = n.plus(10).minus(5);
// console.log(m);
// --------------------
/* 函数的三种角色
jQuery是一个构造函数：jQuery上由很多供实例操作的方法，例如css...,$().css()
jQuery也是一个普通的对象，在它的堆空间中也存在很多的方法，例如ajax...,$.ajax()
$();创建了jQuert这个类的实例，可以调取jQuery.prototype(jQuert.fn)上的方法
*/

function Foo() {
  getName = function () {
    console.log(1);
  };
  return this;
}
Foo.getName = function () {
  console.log(2);
};
Foo.prototype.getName = function () {
  console.log(3);
};
var getName = function () {
  console.log(4);
};
function getName() {
  console.log(5);
}
Foo.getName(); //2
getName(); //4
Foo().getName(); //1
getName(); //1
new Foo.getName(); //2 //先Foo.getName()，再new
new Foo().getName(); //3 //先new Foo(),再.getName()
new new Foo().getName(); //3 //1.先new Foo(),2.再.getName,3.再new
