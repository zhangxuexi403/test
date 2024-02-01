// 练习1
// num = 10;
// var obj = { num: 20 };
// obj.fn = (function (num) {
//   this.num = num * 3; //资是执行函数的this一般指向window，因为没有人去调用
//   num++;
//   return function (n) {
//     this.num += n;
//     num++;
//     console.log(num);
//   };
// })(obj.num);
// var fn = obj.fn;
// fn(5);
// obj.fn(10);
// console.log(num, obj.num); //22 23 65 30
// ---------------------------------
// 练习2
// var fullName = 'language';
// var obj = {
//   fullName: 'javascript',
//   prop: {
//     getFullName: function () {
//       return this.fullName;
//     }
//   }
// };
// console.log(obj.prop.getFullName()); //this:obj.prop => return obj.prop.fullName => undefined
// var test = obj.prop.getFullName;
// console.log(test()); //this:window => return window.fullName => 'language'
// ----------------------------
// 练习3
// var name = 'window';
// var Tom = {
//   name: 'Tom',
//   show: function () {
//     console.log(this.name);
//   },
//   wait: function () {
//     // this:Tom
//     var fun = this.show; //Tom.show的函数体给了fun
//     fun(); //this.:window => consiole.log(window.name) => window，在window下执行fun，即在window下执行Tom.show的函数体
//   }
// };
// Tom.wait(); //window
// -----------------------
// 练习4
// window.val = 1;
// var json = {
//   val: 10,
//   dbl: function () {
//     this.val *= 2;
//   }
// };
// json.dbl(); //this:json => jjson.val*=2 => json.val = 20;
// var dbl = json.dbl;
// dbl(); //this:window => window.val*=2 => window.val = 2
// json.dbl.call(window); //this：window(基于call方法改的) => window.val=4
// alert(window.val + json.val); // '24'
// ---------------------
// 练习5 ，作用域只能是栈内存
// (function () {
//   var val = 1;
//   var json = {
//     val: 10,
//     dbl: function () {
//       // 上级作用域(栈不是堆)，所以是全局作用域
//       val *= 2; //=>全局的val=2
//     }
//   };
//   json.dbl();
//   alert(json.val + val); // =>'12'
// })();
// 修改之后的练习5
// (function () {
//   var val = 1;
//   var json = {
//     val: 10,
//     dbl: function () {
//       this.val *= 2; //this:json => json.val*=2 => json.val = 20
//     }
//   };
//   json.dbl();
//   alert(json.val + val); // =>'21'
// })();
// -----------------
// 构造函数练习1
// 构造函数执行，因为也具备普通函数执行的特点
// 1.和实例有关系的操作一定是this.xxx=xxx，因为this是当前类创造出来的实例
// 2.私有变量和实例没有必然的联系
function Fn(n) {
  let m = 10; //n和m是私有栈的，只有this.的才是给实例设置属性的
  this.total = n + m;
  this.say = function () {
    console.log(this.total);
  };
}
let f1 = new Fn(10);
let f2 = new Fn(20);

console.log(f1.m); //undefined
console.log(f2.n); //undefined
console.log(f1.total); //20
f2.say(); //30 //this:f2（因为say执行前面有点）
console.log(f1 === f2); //false //f1和f2是两个不同的堆地址
// new形成的私有变量、形参和其他的东西和返回的实例无关，只有this.的东西和实例有关，因为this代表当前实例
// new的时候不论是否家小括号，都相当于把Fn执行了，也创建了对应的实例，只不过不加小括号无法传递实参
// ---------------总结:
// this是函数执行的主体(谁执行的)
// this是谁和函数在哪创建的或者函数在哪里执行的都没有必然的关系
// 掌握几条分清执行的主体的规律
// 1.给元素的某个时间绑定方法，当事件触发方法时，方法中的this是当前操作的元素
// 2.方法执行，看方法前面是否有点，有点，点前面是谁this就是谁，没有点，this是window(在严格模式下没有点this就是undefined=>'use strict')
// 3.在构造函数模式中执行，函数体中的this是当前类的实例
// function fn() {
//   console.log(this);
// }
// let obj = { fn: fn }; //this:window
// obj.fn(); //this:obj
