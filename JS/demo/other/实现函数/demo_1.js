// ?1.实现(5).add(3).minus(2),时期输出结果为：6
// ~(function () {
//   function check(n) {
//     // n = Number(n);
//     // return isNaN(n) ? 0 : n;
//     return Number(n) && (isNaN(n) ? 0 : n);
//   }
//   function add(n) {
//     n = check(n);
//     return this + n;
//   }
//   function minus(n) {
//     n = check(n);
//     return this - n;
//   }
//   ['add', 'minus'].forEach(item => {
//     Number.prototype[item] = eval(item);
//   });
// })();
// console.log((5).add(3).minus(2));
// ?2.写一个回调函数
// function each(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     let flag = callback.call(arr, arr[i], i); //将this改变为原始数组,且接收回调函数返回结果
//     if (flag === false) {
//       break;
//     }
//   }
// }
// each([10, 20, 30, 40], function (item, index) {
//   console.log(this);
//   if (index > 1) {
//     return false;
//   }
// });
// ?3.实现each方法,实现下列功能
// let arr = [10, 20, 30, 'AA', 40],
//   obj = {};
// arr = arr.each(function (item, index) {
//   console.log(item, index, '3333');
//   //this:obj(each第二个参数不穿，this是window即可)
//   if (isNaN(item)) {
//     return false; //如果return的是false，则结束当前数组的循环
//   }
//   return item * 10; //返回的结果是啥，就把数组中当前项替换成啥
// }, obj);
// console.log(arr, '最终输出的结果'); //[ 100, 200, 300, 'AA', 40 ] 222
// // todo代码实现部分
// ~(function () {
//   function each(fn, thisArg = window) {
//     for (let i = 0; i < this.length; i++) {
//       let flag = fn.call(thisArg, this[i], i);
//       if (flag === false) {
//         break;
//       } else {
//         this[i] = flag;
//       }
//     }
//     return this;
//   }
//   Array.prototype.each = each;
// })();
// ?4.replace，重写这个额方法，实现和内置一样的效果（只需要考虑replace([reg][callback])这种传参格式的处理）
// let str = 'zhufeng2019zhufeng2029';
// str = str.replace(/zhufeng/g, function (...arg) {
//   //arg中存储了每一次大正则匹配的信息和小分组匹配的信息
//   return '@'; //=>返回的是啥，把当前正则匹配的内容替换成啥
// });
// ?5.如何将一个字符串的大小写取反（大写变小写，小写变大写，例如'AbC'变成'aBc'）
// let str = 'zhufengpeixun一二三*！ABC';
// str = str.replace(/[a-zA-Z]/g, content => {
//   //验证是否为大写字母：将字母转化为大写字母后看和之前是否一样，如果一样，之前也是大写的；
//   //ASCII表中找到大写字母的取值范围进行判断(65-90)
//   //content.toUpperCase() === content;
//   //content.charCodeAt() >= 65 && content.charCodeAt() <= 90;
//   return content.toUpperCase() === content ? content.toLowerCase() : content.toUpperCase();
// });
// console.log(str);
// ?6.实现一个字符串匹配算法，从字符串S中，查找是否存在字符串T，若存在返回所在位置，不存在返回-1!（如果不能基于indexOf/includes等内置的方法，你会如何处理？）
// ~(function () {
//   //方法1.循环原始字符串中的每一项，让每一项从当前位置相互截取T.length个字符，然后和T进行比较，如果不一样，继续循环；如果一样返回当前索引即可
//   /* function myIndexOf(T) {
//     //this:S
//     let lenT = T.length,
//       lenS = this.length,
//       res = -1;
//     if (lenT > lenS) return -1;
//     for (let i = 0; i <= lenS - lenT; i++) {
//       if (this.substr(i, lenT) === T) {
//         res = i;
//         break;
//       }
//     }
//     return res;
//   } */
//   //方法2.正则处理
//   function myIndexOf(T) {
//     //this:S
//     let reg = new RegExp(T),
//       res = reg.exec(this);
//     return res === null ? -1 : res.index;
//   }
//   String.prototype.myIndexOf = myIndexOf;
// })();
// let S = 'zhufengpeixun',
//   T = 'pei';
// console.log(S.myIndexOf(T));
// ?7.输出下列结果
// example1
// var a = {},
//   b = '123',
//   c = 123;
// a[b] = 'b';
// a[c] = 'c';
// console.log(a[b]); //=>c 因为a['123'] <=> a[123]
// example2
// var a = {},
//   b = Symbol('123'),
//   c = Symbol('123');
// a[b] = 'b';
// a[c] = 'c';
// console.log(a[b]); //=>b typeof Symbol('123')===symbol,创建出来的值是唯一的，Symbol('123')!==Symbol('123')
// example3
// var a = {},
//   b = { key: '123' },
//   c = { key: '456' };
// a[b] = 'b';
// a[c] = 'c';
// console.log(a[b]); //=>c 因为改的都是'[obejct Object]'这个属性名
//1.对象属性名不能是一个对象（遇到对象属性名，会默认转换为字符串）
// obj = {}; arr = [12, 23]; obj[arr]='珠峰'; obj=>{'12,23':'珠峰'}
//2.普通对象.toString() 调取Object.prototype上的方法（这个方法是用来检测数据类型的）
// obj = {}; obj.toString()=>'[obejct Object]'
// ?8.在输入框中如何判断输入的是一个正确的网址，例如：用户输入一个字符串，验证是否符合URL网址的格式
