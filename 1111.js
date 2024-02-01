function demo1(fuc, delay) {
  let timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        fn;
      }, delay);
    }
  };
}
// 节流
// const demo = (fn, delay) => {
//   let timer = null;
//   return function () {
//     if (!timer) {
//       timer = setTimeout(() => {
//         fn.apply(this, arguments);
//       }, delay);
//     }
//   };
// };
// 防抖
// const demo = (fn, delay) => {
//   let timer = null;
//   return function () {
//     if (timer) {
//       clearTimeout(timer);
//     } else {
//       timer = setTimeout(() => {
//         fn.apply(this, arguments);
//       }, delay);
//     }
//   };
// };

// Hello World ==> dehlorw
// function demo(str) {
//   let arr = str.toLowerCase().split(' ');
//   str = arr[0] + arr[1];
//   let res = [];
//   for (let i = 0; i < str.length; i++) {
//     res.push(str.charCodeAt(i));
//   }
//   res = [...new Set(res)].sort((a, b) => a - b);
//   return String.fromCharCode(...res);
// }
// console.log(demo('Hello World'));
