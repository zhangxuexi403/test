// todo 学习这篇文章https://juejin.cn/post/6875152247714480136#heading-1
// ?1.数组扁平化
// 数组扁平化是指将一个多维数组变为一个一维数组
const arr = [1, [2, [3, [4, 5]]], 6]; // expect=>[1, 2, 3, 4, 5, 6]
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
