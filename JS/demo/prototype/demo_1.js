function Fn() {
  // this:f1这个实例
  this.x = 100;
  this.y = 200;
  this.say = function () {
    console.log(this.x); //这里的this不知道是谁，因为没有调用
  };
}
Fn.prototype.say = function () {
  console.log(this.y);
};
Fn.prototype.eat = function () {
  console.log(this.x + this.y);
};
Fn.prototype.write = function () {
  this.z = 1000;
};
let f1 = new Fn();
f1.say(); //this:f1 => console.log(f1.x) => 100
f1.eat(); //this:f1 => console.log(f1.x+f1.y) => 300
f1.__proto__.say(); //this:f1.__proto__ => console.log(f1.__proto__.y) => undefined
Fn.prototype.eat(); //this:Fn.prototype => console.log(Fn.prototype.x+Fn.prototype.y) => NaN
f1.write(); //this:f1 => f1.z=1000 => 给f1设置一个私有的属性z=1000
Fn.prototype.write(); //this:Fn.prototype => Fn.prototype.z=1000 => 给原型上设置一个私有的属性z=1000（属性是实例的共有属性）
// 面向对象中私有/共有方法中的this问题
// 1.方法执行，看前面是否有点，点前面是谁this就是谁
// 2.把方法总的this进行替换
// 3.再基于原型链查找的方法确定结果即可
// --------------
// 基于内置内的原型扩展方法
// 在内置类原型上的方法，类所对应的实例可以直接调取使用，例如：实例.方法 ary.push()
// 若将自己写的方法放在原型上，那么当前类的实例可以这样调取使用
// 但是也有需要注意的地方
// 1.自己扩展的方法不能影响原有内置的方法（我们自己设置的方法最好就是加前缀：my）
// 2.扩展方法中的this一般都是当前类的实例（也就是要操作的值）：实例.方法()
