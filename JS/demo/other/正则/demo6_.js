// 其他正则捕获的方法
// 1.test也能捕获（本意是匹配）
// let str = '{0}年{1}月{2}日';
// let reg = /\{(\d+)\}/g;
// console.log(reg.test(str)); //=>true
// console.log(RegExp.$1); //0
// console.log(reg.test(str)); //=>true
// console.log(RegExp.$1); //1
// console.log(reg.test(str)); //=>true
// console.log(RegExp.$1); //2
// console.log(reg.test(str)); //=>true
// console.log(RegExp.$1); //2
// =>RegExp.$1~RegExp.$9：获取当前本次正则匹配后，第一个到第九个分组的信息

// 2.replace字符串中实现替换的方法（一般都是伴随正则一直使用的）
// let str = 'zhufeng@2019|zhufeng@2020';
//=>把'zhufeng'替换成汉字'珠峰'
// 1.不用正则一次只能替换一个
// str = str.replace('zhufeng', '珠峰').replace('zhufeng', '珠峰');
// console.log(str);
// 2.使用正则会简单一点
// str = str.replace(/zhufeng/g, '珠峰');
// console.log(str);

// 案例：把时间字符串进行处理
// let time = '2019-08-13';
// =>变为'2019年08月13日'
// let reg = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
// time = time.replace(reg, '$1年$2月$3日');
// console.log(time);

// 1.首先拿reg和time进行匹配捕获，能匹配到几次就会把传递的函数执行几次（而且是匹配一次就执行一次）
// 2.不仅把方法执行，而且replace还会给方法传递了实参信息（和exec捕获的内容一致的信息：大正则匹配的内容，小分组匹配的信息...）
// 3.在函数中返回的是啥，就把当前大正则匹配的内容替换成啥
// time = time.replace(reg, (big, ...arg) => {
//   let [$1, $2, $3] = arg; //这里一次匹配就完成
//   $2.length < 2 ? ($2 = '0' + $2) : null;
//   $3.length < 2 ? ($3 = '0' + $3) : null;
//   return $1 + '年' + $2 + '月' + $3 + '日';
// });
// console.log(time);

// 单词首字母大写
// let str = 'good good study,day day up!';
// let reg = /\b([a-zA-Z])[a-zA-Z]*\b/g;
// // 函数被执行了6次，每一次都把正则匹配的信息传递给函数
// str = str.replace(reg, (...arg) => {
//   // console.log(arg);
//   let [content, $1] = arg;
//   $1 = $1.toUpperCase();
//   content = content.substring(1);
//   return $1 + content;
// });
// console.log(str);

// ?字母的排序用localeCompare
//验证一个字符串中哪个字母出现的次数最多,多少次?
// let str = 'zaaabbbcccdd';
// str = str
//   .split('')
//   .sort((a, b) => a.localeCompare(b))
//   .join('');
// // console.log(str);
// let reg = /([a-zA-Z])\1+/g; //某个字符出现一到多位
// let ary = str.match(reg);
// ary.sort((a, b) => b.length - a.length);
// let max = ary[0].length,
//   res = [ary[0].substr(0, 1)];
// for (let i = 1; i < ary.length; i++) {
//   let item = ary[i];
//   if (item.length < max) {
//     break;
//   }
//   res.push(item.substr(0, 1));
// }
// console.log(`出现最多次数的字符是:${res},出现了${max}次`);

let str = 'zaaabbbcccdd',
  max = 0,
  res = [],
  flag = false;
str = str
  .split('')
  .sort((a, b) => a.localeCompare(b))
  .join('');
// console.log(str); //=>aaabbbcccddz字符串的排序
for (let i = str.length; i > 0; i--) {
  let reg = new RegExp(`([a-zA-Z])\\1{${i - 1}}`, 'g');
  //捕获一次,函数就执行一次
  str.replace(reg, (content, $1) => {
    //content是大正则,$1是第一个分组匹配的内容
    // 进这个函数,就证明已经将出现最多次的字符串找到,可以结束了,用falg做标记终止函数.
    res.push($1);
    max = i;
    flag = true;
  });
  if (flag) break;
}
console.log(`出现最多次数的字符是:${res},出现了${max}次`);

// 另一种方式
// let str = 'aaaabbbbcc',
//   result = '',
//   max = 0,
//   letter,
//   reg;
// while (str !== '') {
//   let oldLength = str.length;
//   let newLength, changeLength;
//   let firstStr = str.substr(0, 1);
//   let reg = new RegExp(firstStr, 'g');
//   str = str.replace(reg, '');
//   newLength = str.length;
//   changeLength = oldLength - newLength;
//   if (changeLength > max) {
//     max = changeLength;
//     result = firstStr + '=' + max;
//   }
// }
// console.log(result);
