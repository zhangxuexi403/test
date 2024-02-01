function Fn() {
  this.x = 100;
  this.y = 200;
  this.getX = function () {
    console.log(this.x);
  };
}

Fn.prototype.getX = function () {
  console.log(this.x);
};
Fn.prototype = function () {
  console.log(this.y);
};
let f1 = new Fn();
let f2 = new Fn();
console.log(f1.getX === f2.getX); //false
console.log(f1.getY === f2.getY); //true
console.log(f1.__proto__.getY === Fn.prototype.getY); //true
console.log(f1.__proto__.getX === f2.getX); //false，f1的共有，f2的私有
console.log(f1.getX === Fn.prototype.getX); //false
console.log(f1.constructor); //Fn,f1本身没有constructor，向上查找，在Fn.prototype上找到constructor为Fn
console.log(Fn.prototype.__proto__.constructor); ///Object
f1.getX(); //this:f1 => f1.getX() => 100
console.log(f1.__proto__);
f1.__proto__.getX(); //this:f1.__proto__ => f1.__proto__.getX() => undefined
f2.getY(); //this:f2 => f2.getY() => 200
Fn.prototype.getY(); //this:Fn.prototype => Fn.prototype.getY() => undefined
// -------------------------
// 基于constructor实现的数据类型判断
// 但是这种方式有很多弊端：因为可以随意修改对应的constructor或者是手动给ary增加一个私有的constructor属性等
// let ary = [];
// console.log(ary.constructor === Array);
