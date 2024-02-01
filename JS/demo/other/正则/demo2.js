/* 元字符详细解析 */
// '^ $'
// let reg = /^\d/;
// console.log(reg.test('zhufeng')); //false
// console.log(reg.test('2019zhufeng')); //true
// console.log(reg.test('zhufeng2019')); //false

// let reg2 = /\d$/;
// console.log(reg2.test('zhufeng')); //false
// console.log(reg2.test('2019zhufeng')); //false
// console.log(reg2.test('zhufeng2019')); //true

// let reg3 = /\d+/; //两个都不加：字符串中包含符合规则的内容即可
// console.log(reg3.test('zhufeng')); //false
// console.log(reg3.test('2019zhufeng')); //true
// console.log(reg3.test('zhufeng2019')); //true

// let reg4 = /^\d+$/; //两个加上：字符串只能是和规则一致的内容
// console.log(reg4.test('zhufeng')); //false
// console.log(reg4.test('2019zhufeng')); //false
// console.log(reg4.test('zhufeng2019')); //false

// 举个例子：验证手机号码(11位，第一个数字是1即可)
// let reg5 = /^1\d{10}$/; //以1开头，以十个0-9范围的数字结尾

// let reg6 = /^2.3$/; //.不是小数点，是出\n以外的任意字符
// console.log(reg6.test('2.3')); //true
// console.log(reg6.test('2@3')); //true
// console.log(reg6.test('23')); //false

// let reg6 = /^2\.3$/; //基于转义字符，让其只能代表小数点
// console.log(reg6.test('2.3')); //true
// console.log(reg6.test('2@3')); //false
// console.log(reg6.test('23')); //false

// let str = '\\d';
// reg7 = /^\d$/; //\d代表0-9的数字
// console.log(reg7.test(str)); //false
// reg7 = /^\\d$/; //把特殊符号转换成普通符号
// console.log(reg7.test(str)); //true

// x|y
// reg8 = /^18|29$/;
// console.log(reg8.test('18')); //true
// console.log(reg8.test('29')); //true
// console.log(reg8.test('129')); //true
// console.log(reg8.test('189')); //true
// console.log(reg8.test('1829')); //true
// console.log(reg8.test('829')); //true
// console.log(reg8.test('182')); //true
// ------直接x|y会存在很乱的优先级问题，一般写的时候都伴随着小括号进行分组，因为小括号改变处理的优先级=>小括号：分组
// reg8 = /^(18|29)$/; //只能是18或者29中的一个
// console.log(reg8.test('18')); //true
// console.log(reg8.test('29')); //true
// console.log(reg8.test('129')); //false
// console.log(reg8.test('189')); //false
// console.log(reg8.test('1829')); //false
// console.log(reg8.test('829')); //false
// console.log(reg8.test('182')); //false

// []
// 1.中括号中出现的字符一般都代表本身的含义
// let reg9 = /^[@+]$/; //'@'和'+'这两个字符出现
// console.log(reg9.test('@')); //true
// console.log(reg9.test('@')); //true
// console.log(reg9.test('@@')); //false
// console.log(reg9.test('@+')); //false

// reg9 = /^[\d]$/; // \d在中括号中还是0-9
// console.log(reg9.test('d')); //false
// console.log(reg9.test('\\')); //false
// console.log(reg9.test('9')); //true

// reg9 = /^[\\d]$/; // \\d代表'\'和'd'中的一个
// console.log(reg9.test('d')); //true
// console.log(reg9.test('\\')); //true
// console.log(reg9.test('9')); //false

// 2.中括号中不存在多位数
// let reg10 = /^[18]$/; //就是'1'或'8'中的一个
// console.log(reg10.test('1')); //true
// console.log(reg10.test('8')); //true
// console.log(reg10.test('18')); //fasle

// let reg11 = /^[10-29]$/; //1或者0-2或者9
// console.log(reg11.test('1')); //true
// console.log(reg11.test('9')); //true
// console.log(reg11.test('0')); //true
// console.log(reg11.test('2')); //true
// console.log(reg11.test('10')); //false

// let reg11 = /^[(10-29)]$/; //
// console.log(reg11.test('(')); //true
// console.log(reg11.test('15')); //fasle
