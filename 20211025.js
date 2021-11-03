// // 将一个对象的所有属性，格式由蛇形改为驼峰命名
// // 如：person = {
// //     my_name: 'CreatorRay',
// //    my_age: 18
// // }

// // 变为 person = {
// //    myName: 'CreatorRay',
// //    myAge: 18
// // }
// let person = {
//   my_name: 'CreatorRay',
//   my_age: 18
// };
// function demo(obj) {
//   if (typeof obj === 'Date') {
//     return obj;
//   }
//   if (Object.keys(obj).length > 1) {
//     demo(obj);
//   }
//   let resultObj = {};
//   for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//       //   const element = obj[key];
//       let element = key;
//       let temp0 = element.split('_')[0];
//       let temp1 = element.split('_')[1];
//       let resultStr = temp0 + temp1.slice(0, 1).toUpperCase() + temp1.slice(1);
//       resultObj[resultStr] = obj[key];
//     }
//   }
//   return resultObj;
// }
// console.log(demo(person));
/* 2. */
// 给定两个字符串 strA 和 strB, 求 strB 在 strA 中出现的次数
// 如: strA = "aaaa"; strB = "aa"; 算作 strB 在 strA 中出现了 2 次
let strA = 'aaaa';
let strB = 'aa';
function demo(strA, strB) {
  let pre = 0;
  let cur = 0;
  let str = '';
  let resultNum = 0;
  for (let i = 0; i < strA.length; i++) {
    //符合则输出结果+1
    if (cur === strB.length) {
      resultNum++;
    }
    // 继续遍历
    if (strA[i] === strB[cur]) {
      // 第一次pre指针指向字符串起始位置
      if (str.length) {
        pre = i;
      }
      str += strA[i];
      cur++;
    } else {
      // 不符合
      str = ''; //清空缓存字符串
      pre = cur; //记录当前位置
      cur = 0;
    }
  }
  return resultNum;
}
console.log(demo(strA, strB));
