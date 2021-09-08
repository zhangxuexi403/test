// 1.父类：是一个抽象类：不可以直接实例化
// 2.子类实现自身的实例方法
// 抽象父类
function BicycleShop(name) {
  this.name = name;
  this.getName = function () {
    return this.name;
  };
}
BicycleShop.prototype = {
  constructor: BicycleShop,
  sellBicycle: function () {
    var bicycle = this.createbicycle();
    bicycle.a();
    bicycle.b();
    return bicycle;
  },
  createbicycle: function () {
    throw new Error('父类不能直接实例，需要子类来实例');
  }
};
function Extends(Sub, Sup) {
  // let prototype = Object.create(Sup.prototype);
  // prototype.constructor = Sub;
  // Sub.prototype = prototype;
  var F = function () {};
  F.prototype = Sup.prototype;
  Sub.prototype = new F();
  Sub.prototype.constructor = Sub;
  Sub.sup = Sup.prototype;
}
// 子类
function BicycleChild(name) {
  this.name = name;
  BicycleShop.call(this, name);
}
Extends(BicycleChild, BicycleShop);
BicycleChild.prototype.createbicycle = function () {
  var a = function () {
    console.log('执行a任务');
  };
  var b = function () {
    console.log('执行b任务');
  };
  return {
    a,
    b
  };
};
var BicycleChild = new BicycleChild('凤凰');
console.log(BicycleChild);
console.log(BicycleChild.createbicycle());
console.log(BicycleChild.sellBicycle());
var BicycleShop = new BicycleShop('玻璃');
console.log(BicycleShop);
console.log(BicycleShop.createbicycle());
console.log(BicycleShop.sellBicycle());

// 在父类中定义抽象的方法，子类实现自己的业务逻辑，弱化代码之间的耦合
// 当父类或者工厂模式中的属性更多的情况，通过这种方式，弱化对象的耦合，防止代码的重复
// 复杂的代码扔到父类中
// 子类继承父类的所有属性方法,制作机子的业务逻辑
