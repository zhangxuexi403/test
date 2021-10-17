// function demo(str) {
//   if (str.length === 0) return '字符串为空';
//   let res = [];
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 1; i + j <= str.length; j++) {
//       res.push(str.slice(i, i + j));
//       // 边界问题的处理
//       // i表示左指针，范围：0~str.length
//       // j表示slice第二个参数(右开指针)，范围：1~str.length+1
//     }
//   }
//   return res.join(' ');
// }
// const str = 'abc';
// console.log(demo(str));
/* 字符串全排列(可重复版本) */
// const demo = str => {
//   var res = [];
//   if (str.length > 1) {
//     for (let i = 0; i < str.length; i++) {
//       var left = str[i];
//       //拿到去除当前元素的其他元素
//       var rest = str.slice(0, i) + str.slice(i + 1, str.length);
//       //上一次递归的全排列
//       var preResult = demo(rest);
//       //组合在一起
//       for (let j = 0; j < preResult.length; j++) {
//         var tmp = left + preResult[j];
//         res.push(tmp);
//       }
//     }
//   } else if (str.length === 1) {
//     res.push(str);
//   }
//   return res;
// };
// const str = 'abc';
// console.log(demo(str));
/* 不可重复的全排列 */
