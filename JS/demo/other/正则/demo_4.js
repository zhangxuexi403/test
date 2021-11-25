// 正则的分组捕获
// 身份证号码
// let str = '130828199012040112';
// let reg = /^(\d{6})(\d{4})(\d{2})(\d{2})\d{2}(\d)(?:\d|X)$/; //?:只匹配不捕获
// console.log(reg.exec(str));
// console.log(str.match(reg)); //['130828199012040112', '130828', '1990', '12', '04', '1', '2'];
// 数组第一项：大正则匹配的结果
// 其余项：每一个小分组单独匹配捕获的结果
// 如果设置了分组（改变优先级），但是捕获的时候不需要单独捕获，可以基于?:来处理

// 既要捕获到{数字}，也想单独的把数字也获取到，例如：第一此找到{0} 还要单独获取0
// let str = '{0}年{1}月{2}日';
// 不设置g只匹配一次，exec和match获取的结果一致（既有大正则匹配的信息，也有小分组匹配的信息）
// let reg = /\{(\d+)\}/; //把大括号转义了
// console.log(reg.exec(str));
// console.log(str.match(reg));
// reg = /\{(\d+)\}/g;
// console.log(reg.exec(str));
// match不是万能的，有瑕疵
// console.log(str.match(reg)); //[ '{0}', '{1}', '{2}' ]//多次匹配的情况下，match只能把大正则匹配的内容获取到，小分组匹配的信息无法获取
// reg = /\{(\d+)\}/g;
// let aryBig = [],
//   arySmall = [],
//   res = reg.exec(str);
// while (res) {
//   let [big, small] = res;
//   aryBig.push(big);
//   arySmall.push(small);
//   res = reg.exec(str);
// }
// console.log(aryBig, arySmall); //[ '{0}', '{1}', '{2}' ] [ '0', '1', '2' ]

// 小分组：1.改变默认优先级 2.分组捕获 3.分组引用
// ?分组的第三个作用："分组引用"
// 分组引用就是通过"\数字"让其代表和对应分组出现一摸一样的内容
let str = 'book'; //=>'good'、'look'、'moon'
let reg = /^[a-zA-Z]([a-zA-Z])\1[a-zA-Z]$/;
console.log(reg.test('book')); //true
console.log(reg.test('foot')); //true
console.log(reg.test('some')); //false
