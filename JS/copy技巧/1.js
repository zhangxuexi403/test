// todo 学习这篇文章https://juejin.cn/post/6875152247714480136#heading-1
// ?1.数组扁平化
// 数组扁平化是指将一个多维数组变为一个一维数组
// const arr = [1, [2, [3, [4, 5]]], 6]; // expect=>[1, 2, 3, 4, 5, 6]
// ?1.1使用flat()
// const res1 = arr.flat(Infinity);
// ?1.2使用正则（妙呀，我怎么没想到正则把所有方括号去掉）（但是类型都会变为字符串）
// const res2 = JSON.stringify(arr).replace(/\[|\]/g, '').split(',');
// ?1.3正则改良版本
// const res3 = JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']');
// ?1.4使用reduce
// const flatten = arr => {
//   return arr.reduce((pre, cur) => {
//     return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
//   }, []);
// };
// ?1.5函数传递
// const res5 = [];
// const fn = arr => {
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       fn(arr[i]);
//     } else {
//       res5.push(arr[i]);
//     }
//   }
// };
// fn(arr);
// console.log(res5);
// ?2数组去重
// const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}]; // expect=>[1, '1', 17, true, false, 'true', 'a', {}, {}]
// ?2.1利用Set
// const res1 = Array.from(new Set(arr));
// ?2.2两层for循环+splice
// const unique1 = arr => {
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (arr[i] === arr[j]) {
//         arr.splice(j, 1);
//         // 每删除一个数据，j--保证j的值经过自加后不变。同时，len--，减少循环次数提升性能
//         len--;
//         j--;
//       }
//     }
//   }
//   return arr;
// };
// ?2.3利用indexOf
// const unique2 = arr => {
//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (res.indexOf(arr[i]) === -1) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// };
// ?2.4利用include
// const unique3 = arr => {
//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!res.includes(arr[i])) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// };
// ?2.5利用filter
// const unique4 = arr => {
//   return arr.filter((item, index) => {
//     return arr.indexOf(item) === index; //寻找到的位置与当前元素的index匹配，证明第一次出现。
//   });
// };
// ?2.6利用Map
// const unique5 = arr => {
//   const map = new Map();
//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!map.has(arr[i])) {
//       map.set(arr[i], true);
//       res.push(arr[i]);
//     }
//   }
//   return res;
// };
// ?3.类数组转化为数组
// 类数组是具有length属性，但是不具有数组原型上的方法。常见的类数组有arguments、DOM操作方法返回的结果
// ?3.1Arraay.from
// Array.from(document.querySelector('div'));
// ?3.2Array.prototype.slice.call()
// Array.prototype.slice.call(document.querySelector('div'));
// ?.3.3扩展运算符
// [...document.querySelector('div')];
// ?3.4利用concat
// Array.prototype.concat.apply([], document.querySelectorAll('div'));
// ?4.实现Array.prototype.filter()
// 语法var newArray = arr.filter(callback(element[,index[,array]])[thiArg])
/* 
    callback用来检测数组的每个元素的函数。返回true表示该元素通过测试，保留该元素，false则不保留。它接受以下三个参数
        element:数组中当前正在处理的元素
        index?:正在处理的元素在数组中的索引
        array?:调用了filter的数组本身
        thisArg?:执行callback时，用于this的值
    返回值:一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。
*/
// Array.prototype.filter = function (callback, thisArg) {
//   if (this == undefined) {
//     throw new TypeError('this is null or undefined');
//   }
//   if (typeof callback !== 'function') {
//     throw new TypeError(callback, 'is not a function');
//   }
//   const res = [];
//   //让O成为回调函数的对象传递（强制转换对象）
//   const O = Object(this);
//   //>>>0保证len为number，且为正整数
//   const len = O.length >>> 0;
//   //   console.log(O, O.length, thisArg, '111');
//   for (let i = 0; i < len; i++) {
//     //检查i是否在O的属性（会检查原型链）
//     if (i in O) {
//       //回调函数调用传参
//       if (callback.call(thisArg, O[i], i, O)) {
//         res.push(O[i]);
//       }
//     }
//   }
//   return res;
// };
// const arr = [1, 2, 3];
// let res = arr.filter((item, index) => {
//   return item === 1;
// });
// console.log(res);
// ?5.Array.prototype.map()
// Array.prototype.myMap = function (callback, thisArg) {
//   if (this == undefined) {
//     throw new TypeError('this is null or not defined');
//   }
//   if (typeof callback !== 'function') {
//     throw new TypeError(callback, 'is not a function');
//   }
//   const res = [];
//   //同理
//   const O = Object(this);
//   const len = O.length >>> 0;
//   for (let i = 0; i < len; i++) {
//     if (i in O) {
//       //调用回调函数并传入新数组
//       res[i] = callback.call(thisArg, O[i], i, O);
//     }
//   }
//   return res;
// };
// const arr = [1, 2, 3];
// let res = arr.myMap((item, index, array) => {
//   return item * 2;
// });
// console.log(res);
// ?6.Array.prototype.forEach()
// forEach跟map类似，唯一的不同是forEach是没有返回值的。
// Array.prototype.myForEach = function (callback, thisArg) {
//   if (this == undefined) {
//     throw new TypeError('this is null or not defined');
//   }
//   if (typeof callback !== 'function') {
//     throw new TypeError(callback, 'is not a function');
//   }
//   const O = Object(this);
//   const len = O.length >>> 0;
//   let k = 0;
//   while (k < len) {
//     if (k in O) {
//       callback.call(thisArg, O[i], i, this);
//     }
//     k++;
//   }
// };
// ?7.Array.prototype.reduce()
/* 
    callback:执行数组中每个值（如果没有提供initialValue则第一个值除外）的函数，包含四个参数：
        accumlator:累计器累计回调的返回值：它是上一次调用回调函数的累积值，或initialValue（见于下方）。
        currentValue:数组中正在处理的元素。
        index?:数组中正在处理的当前元素的索引。如果提供了initialValue，则起始索引号为0，否则从索引1开始。
        array?:调用reduce()的数组
    initialValue?:作为第一次调用callback函数时的第一个参数的值。如果没有提供初始值，则将使用数组中的第一个元素。在没有初始值的空数组上调用reduce将报错。
    返回值:函数累计处理的结果
*/
// Array.prototype.myReduce = function (callback, initialValue) {
//   if (this == undefined) {
//     throw new TypeError('this is null or not defined');
//   }
//   if (typeof callback !== 'function') {
//     throw new TypeError(callback, 'is not a function');
//   }
//   const O = Object(this);
//   const len = this.length >>> 0;
//   let accumulator = initialValue;
//   let k = 0;
//   //如果第二个参数为undefined的情况下,则数组的第一个有效值作为累加器的初始值
//   //累加器：accumulator，k指向第一个值的指针
//   if (accumulator === undefined) {
//     while (k < len && !(k in O)) {
//       k++; //将数组前面的空值过掉
//     }
//     //如果超出数组界限还没有找到累加器的初始值，则TypeError
//     if (k >= len) {
//       throw new TypeError('Reduce of empty array with no initial value');
//     }
//     accumulator = O[k++];
//   }
//   while (k < len) {
//     if (k in O) {
//       accumulator = callback.call(undefined, accumulator, O[k], k, O);
//     }
//     k++;
//   }
//   return accumulator;
// };
// const arr = new Array(10).fill(1, 1, 2).fill(2, 2, 3).fill(3, 3, 4); //[ <1 empty item>, 1, 2, 3, <6 empty items> ]
// let res = arr.myReduce((pre, cur, index, array) => {
//   return pre + cur;
// });
// console.log(res);
// ?8.Function.prototype.apply()
// 第一个参数是绑定的this，默认为window，第二个参数是数组或者类数组
// Function.prototype.apply = function (context = window, args) {
//   if (typeof this !== 'function') {
//     throw new TypeError('Type Error');
//   }
//   const fn = Symbol('fn');
//   context[fn] = this;
//   const res = context[fn](...args);
//   delete context[fn];
//   return res;
// };
// ?9.Function.prototype.call
// 与call唯一不同的是，call()方法接受的是一个参数列表
// Function.prototype.call = function (context = window, ...args) {
//   if (typeof this !== 'function') {
//     throw new TypeError('Type Error');
//   }
//   const fn = Symbol('fn');
//   context[fn] = this;
//   const res = context[fn](...args);
//   delete context[fn];
//   return res;
// };
// ?10.Function.prototype.bind
// Function.prototype.bind = function (context, ...args) {
//   if (typeof this !== 'function') {
//     throw new Error('Type Error');
//   }
//   //保存this的值
//   var self = this;
//   return function F() {
//     //考虑new的情况
//     if (this instanceof F) {
//       return new self(...args, ...arguments);
//     }
//     return self.apply(context, [...args, ...arguments]);
//   };
// };
// ?11.debounce（防抖）
// 触发高频事件后n秒内函数只会执行一次，如果n秒内高频时间再次吃法，则重新计算时间。
// 防抖常应用于用户进行搜索输入节约请求资源，window触发resize事件时进行防抖只执行一次。
// const debounce = (fn, time) => {
//   let timeout = null;
//   return function () {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       fn.apply(this, arguments);
//     }, time);
//   };
// };
// ?12.throttle（节流）
// 高频事件触发，但n秒内只会执行一次，所以节流会稀释函数的执行频率。
// const throttle = (fn, time) => {
//   let flag = true;
//   return function () {
//     if (!flag) return;
//     flag = false;
//     setTimeout(() => {
//       fn.apply(this, arguments);
//       flag = true;
//     }, time);
//   };
// };
// ?13.函数柯里化
// 指的是将一个接受多个参数的函数变为接受一个参数返回一个函数的固定形式，这样便于再次调用，例如f(1)(2)。
// 经典面试题：实现add(1)(2)(3)(4)=10;、add(1)(1,2,3)(2)=9
// ?14.模拟new操作
/* 
    3个步骤：
        1.以ctor.prototype为原型创建一个对象
        2.执行构造函数并将this绑定到新创建的对象上
        3.判断构造函数执行返回的结果是否是引用类型，若是则返回构造函数的执行结果，否则返回创建的对象
*/
// function newOperator(ctor, ...args) {
//   if (typeof ctor !== 'function') {
//     throw new TypeError('Type Error');
//   }
//   const obj = Object.create(ctor.prototype);
//   const res = ctor.apply(obj, args);
//   const isObject = typeof res === 'object' && res !== null;
//   const isFunction = typeof res === 'function';
//   return isObject || isFunction ? res : obj;
// }
// function Car(size, color) {
//   this.size = size;
//   this.color = color;
// }
// ?15.instance
// const myInstancof = (left, right) => {
//   //基本数据类型都返回false
//   if (typeof left !== 'object' || left === null) return false;
//   let proto = Object.getPrototypeOf(left);
//   while (true) {
//     if (proto === null) return false;
//     if (proto === right.prototype) return true;
//     proto = Object.getPrototypeOf(proto);
//   }
// };
// console.log(myInstancof({}, Object));
// ?16.Object.is
/* 
    Object.is主要解决两个问题：
    +0 === -0 //true
    NaN === NaN //false
*/
// const is = (x, y) => {
//   if (x === y) {
//     // +0和-0应该不相等
//     return x !== 0 || y !== 0 || 1 / x === 1 / y;
//   } else {
//     return x !== x && !y == y;
//   }
// };
// ?17.Obejct.assign
/* 
    Object.assign()方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。
    它将返回目标对象（注意这个操作是浅拷贝）
 */
// Object.defineProperty(Object, 'assign', {
//   value: function (target, ...args) {
//     if (target == null) {
//       return new TypeError('Cannot convert undefined or null to object');
//     }
//     // 目标对象需要统一是引用数据类型，而不是回自动转换
//     const to = Object(target);
//     for (let i = 0; i < args.length; i++) {
//       //每一个源对象
//       const nextSourse = args[i];
//       if (nextSource !== null) {
//         //使用for...in和hasOwnProperty双重判断，确保只拿到本身的属性、方法（不包含继承的）
//         for (const nextKey in nextSource) {
//           if (Object.prototype.hasOwnProperty.call(nextSourse, nextKey)) {
//             to[nextKey] = nextSourse[nextKey];
//           }
//         }
//       }
//     }
//     return to;
//   },
//   //不可枚举
//   enumerable: false,
//   writable: true,
//   configurable: true
// });
// ?19.深拷贝
// 递归的完整版本（考虑到了Symbol属性）
const cloneDeep1 = (target, hash = new WeakMap()) => {
  //对于传入参数处理
  if (typeof target !== 'object' || target === null) {
    return target;
  }
  //哈希表中存在直接返回
  if (hash.has(target)) return hash.get(target);
  const cloneTarget = Array.isArray(target) ? [] : {};
  hash.set(target, cloneTarget);
  //针对Symbol属性
  const symKeys = Object.getOwnPropertySymbols(target);
  if (symKeys.length) {
    symKeys.forEach(symKey => {
      if (typeof target[symKey] === 'object' && target[symKey] !== null) {
        cloneTarget[symKey] = cloneDeep1(target[symKey]);
      } else {
        cloneTarget[symKey] = target[symKey];
      }
    });
  }
  for (const i in target) {
    if (Object.hasOwnProperty.call(target, i)) {
      cloneTarget[i] = typeof target[i] === 'object' && target[i] !== null ? cloneDeep1(target[i], hash) : target[i];
    }
  }
  return cloneTarget;
};
