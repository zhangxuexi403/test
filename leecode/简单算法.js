// 简单算法：
// 字符串、数组、正则、排序、递归
// ?反转字符串中的单词Ⅱ
// function demo1(str) {
// //对数组进行遍历，每个元素进行反转
// //1.
//   return str
//     .split(' ')
//     .map(item => {
//       return item.split('').reverse().join('');
//     })
//     .join();
// //2.
//   return str
//     .split(/\s/g)
//     .map(item => {
//       return item.split('').reverse().join('');
//     })
//     .join(' ');
// //3.
//   return str
//     .match(/[\w']+/g)
//     .map(item => {
//       return item.split('').reverse().join('');
//     })
//     .join(' ');
// }
// ?计数二进制子串
