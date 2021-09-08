// todo数组去重
// ?es5
// function unique(arr) {
//   var res = arr.filter(function (item, index, array) {
//     return array.indexOf(item) === index;
//   });
//   return res;
// }
// es6
// var unique = (arr) => [...new Set(arr)];
// console.log(unique([1, 1, 2, 2, 2, 9, 9, 8, 6, 4]));

// todo数组扁平化
// 实现flat效果
// ?es5
// function flatten(arr) {
//   var result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(flatten(arr[i]));
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// ?es6
// function flatten(arr) {
//   // 有一项满足就返回true
//   while (arr.some(item => Array.isArray(item))) {
//     // console.log(...arr);
//     // 只要存在array，就解构将每一项concat，正常的数字无影响，而arr会被扁平化
//     arr = [].concat(...arr);
//   }
//   return arr;
// }
// console.log(flatten([1, 2, 3, [4, [5, [6]]]]));
