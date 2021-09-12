/** 1.原型链继承
 * !原型链继承存在问题
 * ?问题1：原型中包含的引用类型属性将被所有实例共享
 * ?问题2：自立实例化的时候不能父类构造函数传参
 */
// function Animal() {
//   this.colors = ["black", "white"];
// }
// Animal.prototype.getColor = function () {
//   return this.colors;
// };
// function Dog() {}
// Dog.prototype = new Animal();

// let dog1 = new Dog();
// dog1.colors.push("brown");
// let dog2 = new Dog();
// console.log(dog1.colors);
// console.log(dog2.colors);

/**2.借用构造函数实现继承
 * ?借用构造函数实现继承解决了原型链继承的2个问题：引用类型共享问题以及传参问题。但是由于方法必须定义在构造函数中，所以导致每次创建子类实例都会创建一遍方法。
 */
// function Animal(name) {
//   this.name = name;
//   this.getName = function () {
//     return this.name;
//   };
// }
// function Dog(name) {
//   Animal.call(this, name);
// }
// Dog.prototype = new Animal();

/**3.组合继承
 * ?组合继承结合了原型链和盗用构造函数，将两者的优点集中了起来。基本的概念就是使用原型链继承原型链上的属性和方法，，而是通过盗用构造函数继承实例属性。这样既可以把方法定义在原型上实现重用，又可以让每个实例都有自己的属性。
 */
// // getName不会被改变可以复用，不需要加到每一个Dog的构造函数上，所以getName放在prototype上，将不变的都放在原型链上
// function Animal(name) {
//   this.name = name;
//   this.colors = ["black", "white"];
// }
// Animal.prototype.getName = function () {
//   return this.name;
// };
// function Dog(name, age) {
//   Animal.call(this, name);
//   this.age = age;
// }
// Dog.prototype = new Animal();
// Dog.prototype.constructor = Dog;
// let dog1 = new Dog("Nancy", 1);
// dog1.colors.push("brown");
// let dog2 = new Dog("Lucky", 2);
// console.log(dog1); //Dog { name: 'Nancy', colors: [ 'black', 'white', 'brown' ], age: 1 }
// console.log(dog2); //Dog { name: 'Lucky', colors: [ 'black', 'white' ], age: 2 }

/**4.寄生式组合继承
 * ?组合继承已经相对完善了，但还是存在问题，他的问题就是调用了2次父类构造函数，第一次是在new Animal()，第二次是在Animal.call()这里。所以解决方案就是不直接调用父类构造函数给子类原型赋值，而是通过空函数F获取父类原型的副本。
 * ?这只是继承父原型链，继承父本身的属性、方法需要子类内Father.call(Son,name)这种方式来实现
 */
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
function inheritPrototype(child, parent) {
  //   let prototype = object(parent.prototype);
  let prototype = Object.create(parent.prototype);
  child.prototype = prototype;
  prototype.constructor = child;
}
inheritPrototype(Dog, Animal);

/**5.class实现继承
 *
 */
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
// }
// class Dog extends Animal {
//   constructor(name, age) {
//     super(name);
//     this.age = age;
//   }
// }
