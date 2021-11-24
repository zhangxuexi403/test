function fun() {
  this.a = 0;
  this.b = function () {
    console.log(this.a); // alert(this.a);
  };
}
fun.prototype = {
  b: function () {
    this.a = 20;
    console.log(this.a); // alert(this.a);
  },
  c: function () {
    this.a = 30;
    console.log(this.a); // alert(this.a);
  }
};
var my_fun = new fun();
my_fun.b(); //私有的，this:my_fun => my_fun.a => 0
my_fun.c(); //共有的，this:my_fun => my_fun.c => my_fun.a=30;console.log(my_fun.a) => 30
console.log(my_fun.constructor); //Object，直接重写原型造成的问题
// --------------------
// function Fn() {}
// Fn.prototype.xxx = function () {};
// 批量给原型设置属性方法的时候：设置别名
// let proto = Fn.prototype;
// proto.getA = function () {};
// proto.getB = function () {};
// proto.getC = function () {};
// proto.getD = function () {};
// 重构类的原型：让某个类的原型指向新的堆内存地址（重定向指向）
// 问题1：重定向后的空间不一定由construtor属性（只有浏览器默认给prototype开辟的堆内存中才存在constructor），这样导致类和原型机制不完整
// 所以需要手动给新的原型空间设置constructor属性
// 问题2：在重新指向之前，需要确保原有原型的堆内存中没有设置属性和方法，因为重定向后原有的属性和方法就没啥用了（如果需要克隆到新的原型堆中，还需要额外的处理）
// 但是内置类的原型，由于担心这样的改变会让内置的方法都消失，所以禁止了我们给内置类原型的空间重定向，例如：Array.prototype={...}这样没有用，如果想加方法Array.prototype.xxx=function(){...}这样可以处理
// Fn.prototype = {
//   constructor: Fn,
//   getA: function () {},
//   getB: function () {},
//   getC: function () {},
//   getD: function () {}
// };
