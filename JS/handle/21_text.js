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
function flatDeep(arr, d = 1) {
  return d > 0
    ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
    : arr.slice();
}
var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];
console.log(flatDeep(arr1, Infinity));
