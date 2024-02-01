// function c1(name) {
//   if (name) {
//     this.name = name;
//   }
// }
// function c2(name) {
//   this.name = name;
// }
// function c3(name) {
//   this.name = name || 'join';
// }
// c1.prototype.name = 'Tom';
// c2.prototype.name = 'Tom';
// c3.prototype.name = 'Tom';
// console.log(new c1().name + new c2().name + new c3().name);
// new c1().name找原型上的Tom，new c2().name入参为undefined赋值，new c3().name为默认值join
// alert(new c1().name + new c2().name + new c3().name);
// ------------------
// 易混淆的点:
// function Fn() {
//   let a = 12;
//   this.x = 100;
//   this.y = 200;
// }
// let f = new Fn();
// console.log(f.a); //undefined,let a=12为私有作用域的私有变量,this代表f,给f加属性需要使用this.的形式添加
// ---------------------
function Fn(num) {
  this.x = this.y = num;
}
Fn.prototype = {
  x: 20,
  sum: function () {
    console.log(this.x + this.y);
  }
};
let f = new Fn(10);
console.log(f.sum === Fn.prototype.sum); //true
f.sum(); //this:f => console.log(f.x+f.y) => 20
Fn.prototype.sum(); //this;Fn.prototype => console.log(Fn.prototype.x + Fn.prototype.y) => NaN
console.log(f.constructor); //Object
