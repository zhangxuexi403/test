// function _reduce(fn, init = {}) {
//   pre = init;
//   return function fn(pre, cur, index, array) {};
// }
// function demo(fn, delay) {
//   var timer = null;
//   var args = arguments;
//   (function () {
//     timer = setTimeout(() => {
//       if (timer) {
//         clearTimeout(timer);
//       }
//       fn(args);
//     }, delay);
//   })();
// }
// function fn1() {
//   console.log(1);
// }
// demo(fn1, 1000);
// demo(fn1, 2000);
// demo(fn1, 3000);
// demo(fn1, 4000);

// const demo = a => b => c => a + b + c;
// const result = demo(1)(2)(3);
// console.log(result);
// function demo() {
//   var args = arguments;
//   return args;
// }
// let result1 = demo(a)(b)(c)();
// let result2 = demo(a, b, c);
// console.log();
// function demo1(a) {
//   return function demo2(b) {
//     console.log(a + b);
//   };
// }

// var event = {
//   eventList: [{ A: [{'zhang','event1'}, {'li','event1'}, 'wang'] }, { B: ['zhang', 'wang'] }],
//   eventCreate: function () {},
//   eventTodo: function () {

//   }
// };
// navBar
// redux
// vuex
class MyLocalStorage {
  constructor(product) {
    this.product = product;
  }
  set(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
  }
  get(name) {
    let result = localStorage.get(name);
    return JSON.parse(result);
  }
}
let l = new MyLocalStorage();
l.set(token, value);

function demo() {
  Math.random().toFixed(2) * 100;
  1 - 99;
  26;
  a - z;
  4 * 7;
  //   agetime
  //   token
  hash - 'asdc-asdd';
}
cookies.set(0);
Map(
    '':''
);
obj = {
    '',Symbol()
};
WeakMap(){
    // name:''
    name:''
    a:''
}
