// todo1.事件委托，方式一
// function delegate(element, eventType, selector, fn) {
//   element.addEventListener(
//     eventType,
//     e => {
//       let el = e.target;
//       //如果元素被指定的选择器字符串选择，Element.matches()  方法返回true; 否则返回false。
//       while (!el.matches(selector)) {
//         if (element === el) {
//           el = null;
//           break;
//         }
//         el = el.parentNode;
//       }
//       el && fn.call(el, e, el);
//     },
//     true
//   );
//   return element;
// }
// let ul = document.querySelector('#xxx');
// function logText() {
//   console.log(1111);
// }
// delegate(ul, 'click', 'ul', logText);
// todo1.事件委托，方式二
// function delegate(element, event, fn) {
//   element.addEventListener(event, e => {
//     const current = e.target;
//     console.log(current);
//     //Node.contains()返回的是一个布尔值，来表示传入的节点是否为该节点的后代节点。
//     if (element.contains(current)) fn.call(current, e);
//   });
//   return element;
// }
// let ul = document.querySelector('#xxx');
// function logText() {
//   console.log(1111);
// }
// delegate(ul, 'click', logText);
// todo2.实现一个拖拽div
// var dragging = false;
// var position = null;
// //获取元素，并且脱离文档流
// var xxx = document.getElementById('xxx');
// xxx.style.position = 'relative';
// xxx.addEventListener('mousedown', function (e) {
//   dragging = true;
//   position = [e.clientX, e.clientY];
// });
// document.addEventListener('mousemove', function (e) {
//   if (dragging === false) return null;
//   const x = e.clientX;
//   const y = e.clientY;
//   const deltaX = x - position[0];
//   const deltaY = y - position[1];
//   const left = parseInt(xxx.style.left || 0);
//   const top = parseInt(xxx.style.top || 0);
//   xxx.style.left = left + deltaX + 'px';
//   xxx.style.top = top + deltaY + 'px';
//   position = [x, y];
// });
// document.addEventListener('mouseup', function (e) {
//   dragging = false;
// });
// todo3.手写防抖和节流
// todo3.1防抖
// debounce
// search搜索联想，用户在不断输入值时，用防抖来节约请求资源。
// window触发resize的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次
// 搜索框对关键字进行搜索，就会发送ajax请求，然后展示在列表，每次按下键盘都会发送ajax请求，这非常浪费资源，应该在输入完字符一段时间再发送ajax请求
// function debounce(fn, delay = 500) {
//   let timer = null;
//   return function () {
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(() => {
//       fn.apply(this, arguments);
//       timer = null;
//     }, delay);
//   };
// }
// const xxx = document.getElementById('xxx');
// xxx.addEventListener(
//   'keyup',
//   debounce(function (e) {
//     console.log(e.target.value);
//   }, 2000)
// );
// todo3.2节流
// throttle
// 鼠标不断点击触发，mousedown(单位时间内只触发一次)
// 监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断
// 浏览器窗口的缩放，页面的滑动触发的 resize ，scroll
// 鼠标事件 onmousemove ，onmousedown， onmouseup
// 输入框录入触发的 keyup ，keydown……
// 拖拽一个元素时，要随时获取元素被拖拽的位置，，如果没有节流，只要该元素移动1丢丢，哪怕是1px都会获取当前拖拽的位置，这是非常损耗性能的
// function throttle(fn, delay = 500) {
//   let timer = null;
//   return function () {
//     if (timer) return;
//     timer = setTimeout(() => {
//       fn.apply(this, arguments);
//       timer = null;
//     }, delay);
//   };
// }
// todo数组去重
// function unique(arr) {
//   return [...new Set(arr)];
// }
// function unique(arr) {
//   return arr.filter((item, index, array) => {
//     return array.indexOf(item) === index;
//   });
// }
// function unique(arr) {
//   const result = [];
//   return arr.filter((item, index, array) => {
//     return result.includes(item) ? false : result.push(item);
//   });
// }
// function unique(arr) {
//   const result = [];
//   return arr.filter((item, index, array) => {
//     return result.indexOf(item) === -1 ? result.push(item) : false;
//   });
// }
// function unique(arr) {
//   return arr.reduce((pre, cur, array) => {
//     return pre.includes(cur) ? pre : [...pre, cur];
//   }, []);
// }
// function unique(arr) {
//   let map = new Map(); //利用Map不能重复的特性
//   arr.map((item, index, array) => {
//     if (!map.has(item)) {
//       map.set(item, true);
//     }
//   });
//   return Array.from(map.keys());
// }
// function unique(array) {
//   var obj = {};
//   return array.filter(function (item, index, array) {
//     return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true);
//   });
// }
// console.log(unique([0, 1, '2', 2, 3, 3, 3, 4, 4, 4, 4]));
// console.log(unique([1, 1, '1', '1', true, true, 'true', {}, {}, '{}', null, null, undefined, undefined]));
// todo实现柯里化函数
// 柯里化的这种封装函数的方式，只是一种思路，目的是同一个通用性很强，接收多个参数的函数转化为多个适用性强，接收参数单一的函数。
// 柯里化就是把接受【多个参数】的函数变化成接受一个【单一参数】的函数，并且返回接受【余下参数】返回结果的一种应用
// 思路：1.判断传递的参数是否执行函数的fn个数。2.没有达到的话，继续返回新的函数，并且返回currying函数传递剩余参数
// let currying = (fn, ...args) => {
//   // 函数的参数个数可以直接通过fn.length属性访问
//   // 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
//   // 传入的参数小于原函数的fn的参数个数时,则继续对当前函数进行柯里化,返回一个接受所有参数(当前参数和剩余参数)的函数
//   return fn.length > args.length ?
//   (...arguments) => currying(fn, ...args,...arguments) :
//   fn(...args) ;
// };
// let addSum = (a, b, c) => a + b + c;
// let add = currying(addSum);
// console.log(add(1)(2)(3));
// console.log(add(1, 2)(3));
// console.log(add(1, 2, 3));
// console.log(addSum.length);
// todo实现数组flat
// 方式一
// Array.prototype.flat(num);
// num表示的是维度
// 指定要提取嵌套数组的结构深度，默认值为1
// 使用Infinity,可以展开任意深度的嵌套数组
// 方式二
// const flatDeep = arr => {
//   return arr.reduce((pre, cur, array) => {
//     if (Array.isArray(cur)) {
//       // return [...pre, ...flatDeep(cur)];
//       return pre.concat(flatDeep(cur));
//     } else {
//       // return [...pre, cur];
//       return pre.concat(cur);
//     }
//   }, []);
// };
// var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];
// console.log(flatDeep(arr1));
// 方式三
// function flatDeep(arr, d = 1) {
//   return d > 0
//     ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
//     : arr.slice();
// }
// var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];
// console.log(flatDeep(arr1, Infinity));
// todo深拷贝，深拷贝解决的就是「共用内存地址所导致的数据错乱问题」
// 思路：递归，判断类型，即按察环(也叫循环引用)，需要忽略原型
// function deepClone(obj, map = new WeakMap()) {
//   console.log(obj, 'oooooo');
//   console.log(obj.constructor, 'obj.constructor');
//   if (obj instanceof RegExp) return new RegExp(obj);
//   if (obj instanceof Date) return new Date(obj);
//   if (obj == null || typeof obj != 'object') return obj;
//   // 类型为object才能继续
//   if (map.has(obj)) return obj;
//   let t = new obj.constructor();
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       t[key] = deepClone(obj[key], map);
//     }
//   }
//   return t;
// }
// let obj = {
//   a: 1,
//   b: {
//     c: 2,
//     d: 3
//   },
//   e: new RegExp(/^\s+|\s$/g)
// };
// let clone_obj = deepClone(obj);
// obj.d = /^\s|[0-9]+$/g;
// console.log(clone_obj);
// console.log(obj);
// todo实现一个对象类型的函数
// 核心：Object.prototype.toString
// isType函数，也属于【偏函数】的范畴，偏函数实际上是返回了一个包含【预处理参数】的函数。
// let isType = type => obj => Object.prototype.toString.call(obj) === `[object ${type}]`;
// let isArray = isType('Array');
// let isFunction = isType('Function');
// console.log(isArray([1, 2, 3]), isFunction(Map));
// todo手写call和apply
// 改变this指向，唯一区别就是传递参数不同
// todo实现call
// Function.prototype.mycall = function () {
//   //数组解构，thisArg为改变的this指向，args为数组，...args为参数展开
//   let [thisArg, ...args] = [...arguments];
//   thisArg = Object(thisArg) || window;
//   let fn = Symbol(1);
//   thisArg[fn] = this;
//   let result = thisArg[fn](...args);
//   delete thisArg[fn];
//   return result;
// };
// todo实现apply
// Function.prototype.myapply = function () {
//   let [thisArg, args] = [...arguments];
//   thisArg = Object(thisArg);
//   let fn = Symbol(1);
//   thisArg[fn] = this;
//   let result = thisArg[fn](...args);
//   delete thisArg[fn];
//   return result;
// };
//测试用例
// let cc = {
//   a: 1
// };
// function demo(x1, x2) {
//   console.log(typeof this, this.a, this);
//   console.log(x1, x2);
// }
// demo.apply(cc, [2, 3]);
// demo.myapply(cc, [2, 3]);
// demo.call(cc, 33, 44);
// demo.mycall(cc, 33, 44);
// todo手写bind
// 实现bind
// Function.prototype.mybind = function (context, ...args) {
//   return (...newArgs) => {
//     return this.call(context, ...args, ...newArgs);
//   };
// };
// let cc = {
//   name: 'TianTian'
// };
// function say(something, other) {
//   console.log(`I want to tell ${this.name} ${something}`);
//   console.log(`This is some` + other);
// }
// let tmp = say.mybind(cc, 'happy', 'you are kute');
// let temp1 = say.bind(cc, 'happy', 'you are kute');
// tmp();
// tmp1();
// todo实现new操作
// ?理解：
// ?1.创建一个空对象，并且将this变量引用该对象，同时还继承了该函数的原型
// ?2.属性和方法被加入到this引用的对象中
// ?3.新创建的对象由this所引用，并且最后隐式返回this
// 核心要点
// 1.创建一个新的对象，这个对象的__proto__要指向构造函数的原型对象
// 2.执行构造函数
// 3.返回值为object类型则为new方法的返回值返回，否则返回上述全新对象
// function _new() {
//   let obj = {};
//   let [constructor, ...args] = [...arguments];
//   obj.__proto__ = constructor.prototype;
//   let result = constructor.apply(obj, args);
//   if (result && (typeof result === 'function' || typeof result === 'obejct')) {
//     return result;
//   }
//   return obj;
// }
// todo实现instanceof
// !存在问题的;
// 【instanceof运算符】用于检测构造函数的prototype属性是否出现在某个实例对象的原型链上。
// function my_instanceof(leftValue, rightValue) {
//   if (typeof leftValue !== 'object' || leftValue === null) return false;
//   let rightProto = rightValue.prototype;
//   let leftProto = leftValue.__proto__;
//   while (true) {
//     if (leftProto === null) {
//       return false;
//     }
//     if (leftProto === rightProto) {
//       return true;
//     }
//     leftProto = leftProto.__proto__;
//   }
// }
// todo实现sleep
// 某个时间后就去执行某个函数，使用Promise封装
// function sleep(fn, time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(fn);
//     }, time);
//   });
// }
// let saySomething = name => console.log(`hello,${name}`);
// async function autoPlay() {
//   let demo1 = await sleep(saySomething('TianTian'), 1000);
//   let demo2 = await sleep(saySomething('李磊'), 1000);
//   let demo3 = await sleep(saySomething('掘金的好友们'), 1000);
// }
// autoPlay();
//
// todo实现Promise.all
// Promise.myall = function (arr) {
//   return new Promise((resolve, reject) => {
//     if (arr.length === 0) {
//       return resolve();
//     } else {
//       let res = [];
//       let count = 0;
//       for (let i = 0; i < arr.length; i++) {
//         // 同时也能处理arr数组中非Promise对象
//         if (!(arr[i] instanceof Promise)) {
//           res[i] = arr[i];
//           if (++count === arr.length) resolve(res);
//         } else {
//           arr[i].then(
//             data => {
//               res[i] = data;
//               if (++count === arr.length) resolve(res);
//             },
//             err => {
//               reject(err);
//             }
//           );
//         }
//       }
//     }
//   });
// };
// todo实现Promise.race
// Promise.myrace = function (arr) {
//   return new Promise((resolve, reject) => {
//     for (let i = 0; i < arr.length; i++) {
//       //  同时还能处理arr数组中非Promise对象
//       if (!(arr[i] instanceof Promise)) {
//         Promise.resolve(arr[i]).then(resolve, reject);
//       } else {
//         arr[i].then(resolve, reject);
//       }
//     }
//   });
// };
// 测试用例
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(11);
//   }, 2000);
// });
// let p2 = new Promise((resolve, reject) => {
//   reject('asfs');
// });
// let p3 = new Promise(resolve => {
//   setTimeout(() => {
//     resolve(33);
//   }, 4);
// });
// Promise.myall([p3, p1, 3, 4]).then(
//   data => {
//     // 按传入数组的顺序打印
//     console.log(data); // [3, 1, 2]
//   },
//   err => {
//     console.log(err);
//   }
// );
// Promise.myrace([p1, p2, p3]).then(
//   data => {
//     // 谁快就是谁
//     console.log(data); // 2
//   },
//   err => {
//     console.log('失败跑的最快');
//   }
// );
// todo手写继承【寄生组合式继承】
// function inheritPrototype(son, father) {
//   // 创建对象，创建父类原型的一个副本
//   var prototype = Object.create(father.prototype);
//   // 增强对象，弥补因重写原型而失去的默认的constructor属性
//   prototype.constructor = son;
//   // 指定对象，将创建的对象赋值给子类的原型
//   son.prototype = prototype;
// }
// 测试用例
// 父类初始化实例属性和原型属性
// function Father(name) {
//   this.name = name;
//   this.colors = ['red', 'blue', 'green'];
// }
// Father.prototype.sayName = function () {
//   console.log(this.name);
// };
// // 借用构造函数传递增强子类实例属性（支持传参和避免篡改）
// function Son(name, age) {
//   Father.call(this, name);
//   this.age = age;
// }
// // 将父类原型指向子类
// inheritPrototype(Son, Father);
// // 新增子类原型属性
// Son.prototype.sayAge = function () {
//   console.log(this.age);
// };
// var demo1 = new Son('TianTian', 21);
// var demo2 = new Son('TianTianUp', 20);
// demo1.colors.push('2'); // ["red", "blue", "green", "2"]
// demo2.colors.push('3'); // ["red", "blue", "green", "3"]
// console.log(demo1);
// console.log(demo2);
// todo class实现继承
// Rectangle矩形
// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   get area() {
//     return this.calcArea();
//   }
//   calcArea() {
//     return this.height * this.width;
//   }
// }
// const rectangle = new Rectangle(40, 20);
// console.log(rectangle.area);
// class Suqare extends Rectangle {
//   constructor(len) {
//     super(len, len); //用两个len向父类的构造函数传递width和heigth
//     this.name = 'SquareIng';
//   }
//   get area() {
//     return this.height * this.width;
//     // return super.area;
//   }
// }
// const square = new Suqare(10);
// console.log(square.area);
// this指向函数所在的当前对象
// super指向的是当前对象的原型对象
// super.name===Object.getPrototypeOf(this).name【属性】===Object.getPrototypeOf(this).name.call(this)【方法】
// super.name指向的是原型对象person中断的name，但是绑定的this还是当前的man对象
// 1.class中的super()相当于Parent.prototype.constructor.call(this),super表示父类的构造函数，用来创建父类的this对象
// 2.子类没有自己的this对象，而是继承父类的this对象，然后进行加工。如果不调用super，子类就得不到this对象
// ES5的继承，实质上是创造子类的实例对象this，然后再将父类的方法添加到this上（Parent.call(this)）
// ES6的继承，需要先创建父类的this，子类调用super继承父类的this对象，然后再加工。
// 如果子类没有constructor，这个方法会被默认添加
// 3.super再静态方法中指向父类，在普通方法中指向父类的原型对象
// todo extends继承的核心代码如下，实际上和寄生组合继承方式一样
// function _inherits(Son, Father) {
//   // 创建对象，创建父类原型的一个副本
//   // 增强对象，弥补因重写原型而失去的默认的constructor属性
//   // 指定对象，将新创建的对象赋值给子类的原型
//   Son.prototype = Object.create(Father && Father.prtotype, {
//     constructor: {
//       value: Son,
//       enumerable: false, //可枚举
//       writable: true, //可写
//       configrable: true //可配置
//     }
//   });
//   if (Father) {
//     Object.setPrototypeOf ? Object.setPrototypeOf(Son, Father) : (Son.__proto__ = Father);
//   }
// }
// todo手写AJAX（简略版本）
// var request = new XMLHttpRequest();
// request.open('GET', 'index/a/b/c?name=TianTian', true);
// request.onreadystatechange = function () {
//   if (request.readyState === 4 && request.status === 200) {
//     console.log(request.responseText);
//   }
// };
// request.send();
// todo实现Obejct.create方法
// function myCreate(proto) {
//   function Fn() {}
//   Fn.prototype = proto;
//   Fn.prototype.constructor = Fn;
//   return new Fn();
// }
// let demo = {
//   c: '123'
// };
// let cc = Object.create(demo);
// todo实现一个同时允许任务数量最大为n的函数
// 使用Promise封装，给你一个数组，数组的每一项都是一个Promise对象
// while循环start<n,然后就是then的回调
// function limitRunTask(tasks, n) {
//   return new Promise((resolve, reject) => {
//     let index = 0,
//       finish = 0,
//       start = 0,
//       res = [];
//     function run() {
//       if (finish == tasks.length) {
//         resolve(res);
//         return;
//       }
//       while (start < n && index < tasks.length) {
//         // 每一阶段的任务数量++
//         start++;
//         let cur = index;
//         tasks[index++]().then(v => {
//           start--;
//           finish++;
//           res[cur] = v;
//           run();
//         });
//       }
//     }
//     run();
//   });
// }
