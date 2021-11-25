// 常用的正则表达式
//  1.验证是否为有效数字
/*
规则分析:
1.可能出现 + - 号，也可能不出现
2.一位0-9都可以，多位首位不能是0
3.小数部分可能有可能没有，一旦有后面必须有小数点+数字
*/
// let reg = /^(+|-)?$/;
// [+-]? 可能存在'+'或'-'
// (\d)|([1-9]\d+) 一位或者多位数字，多位时，多位的第一个数字不能为0，所以用[1-9]代表第一位，\d+代表第一位之后的数字时0-9任意
// (\.\d+)? 小数部分可能存在,故用()?。转意'.'，后面小数用\d+

// let reg = /^[+-]?(\d|([1-9]\d+))(\.\d+)?$/;
// console.log(reg.test(1231231.123123123)); //true

// 2.验证密码
// =>数字、字母、下划线 6-16位
// let val = userPassInp.value,
//   reg = /^w{6,16}$/;
// let flag = reg.test(val);

// 3.验证真实姓名
// 1.汉字 /^[\u4E00-\u9FA5]$/
// 2.名字长度2~10位
// 3.可能有译名 ·汉字
// '尼古拉斯·赵四'
// let reg = /^[\u4E00-\u9FA5]{2,10}(·[\u4E00-\u9FA5]{2,10}){0,2}$/;

// 4.验证邮箱的
// let reg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;

// 5.身份证号码
// 1.一共18位
// 2.最后一位可能是X
// 身份证前六位：省市县
// 中间八位：年月日
// 最后四位：最后一位X或者数字；倒数第二位，偶数女，奇数男；其余是经过算法算出来的
//
//
// let reg = /^\d{17}(\d|X)$/;
// =>小括号分组的第二个作用：分组捕获，不仅可以把大正则匹配的信息捕获到，还可以单独捕获每个小分组的内容
// 捕获的结果是一个小分组单独获取的内容
// let reg = /^(\d{6})(\d{4})(\d{2})(\d{2})\d{2}(\d)(\d|X)$/;
// console.log(reg.exec('130828199012040112')); //['230804199908061317', '230804', '1999', '08', '06', '1', '7',...];

//正则两种创建方式的区别
// let reg = /\d+/;
// reg = new RegExp('\\d+', 'g'); //因构造函数传的字符串，斜杠需要写两个才代表本意
// console.log(reg.test('\\')); //true
// =>正则表达式中的部分内容是变量存储的值
// 1.两个斜杠中间包起来的都是元字符（如果正则中要喊某个变量的值，则不能试用字面量方式创建）
// let type = 'zhufeng';
// reg = /^@"+type+"@$/;
// console.log(reg.test('@zhufeng@')); //=>false
// console.log(reg.test('@"""typeeeee"@')); //=>true
// // 2.这种情况只能试用构造函数方式（因为它传递的规则是字符串，只有这样才能进行字符串拼接）
// reg = new RegExp('^@' + type + '@$');
// console.log(reg.test('@zhufeng@')); //=>true

/* 正则的捕获
实现正则捕获的方法
*正则RegExp。prototype上的方法
exec
test
*字符串String.prototype上支持正则表达式处理的方法
replace
match
split
...
*/
// let str = 'zhufeng2019yangfan2020qihang2021';
// let reg = /^\d+$/;
// // 实现正则捕获的前提是：当前正则要和字符串匹配，如果不匹配捕获的结果是null
// console.log(reg.test(str));
// console.log(reg.exec(str)); //null
/* 
    基于exec实现正则的捕获
    1.捕获到的结果是null或者是一个数组
        数组第一项 本次捕获到的内容
        其余项：对应小分组本次单独捕获的内容
        index：当前捕获内容在字符串中的起始索引
        input；原始字符串
    2.每执行一次exec只能捕获到一个符合正则规则的，但是默认情况下，执行一百次，获取到的结果永远都是第一个匹配到的，其余的捕获不到
        =>"正则捕获的懒惰行"，默认只捕获第一个
*/
// reg = /\d+/;
// console.log(reg.exec(str)); //=>执行多少次都输出这个，懒惰性

/* 
    reg.lastIndex：当前正则下一次匹配的起始索引位置
    懒惰性捕获的原因：默认情况下lastIndex的值不会被修改，每一次都是从字符串开始位置查找，所以找到永远只是第一个
    解决办法：全局修饰符g
*/
// let str = 'zhufeng2019yangfan2020qihang2021';
// let reg = /\d+/;
// console.log(reg.lastIndex); //=>0 下面匹配捕获是从str索引0的位置开始找
// console.log(reg.exec(str));
// console.log(reg.lastIndex); //=>0 第一次匹配捕获完成，lastIndex没有改变，所以下一次exec依然是从字符串最开始找，找到的永远是第一个匹配到的
// reg = /\d+/g;
// console.log(reg.exec(str)); //['2019'...]
// console.log(reg.lastIndex); //11 设置全局匹配修饰符g后，第一次匹配完lastIndex会修改
// console.log(reg.exec(str)); //['2020'...]
// console.log(reg.lastIndex); //22
// console.log(reg.exec(str)); //['2021'...]
// console.log(reg.lastIndex); //32
// console.log(reg.exec(str)); //null 当全部捕获后，再次捕获的结果是null ，但是lastIndex又回归了初始值零，再次捕获又从第一个开始了...
// console.log(reg.lastIndex); //0
// console.log(reg.exec(str)); //['2019'...]

// 需求：编写一个execAll，执行一次可以把所有匹配的结果捕获到（前提正则一定要设置全局修饰符g）
// ~(function () {
//   function execAll(str) {
//     // =>str要匹配的字符串
//     // =>sthis:RegExp的实例（当前操作的正则）
//     // =>arg存储所有捕获到的信息 res存储每一次捕获到的内容
//     // =>进啦后的第一件事，是验证当前正则是否设置g，不设置不能在进行循捕获了，否则会造成死循环
//     if (!this.global) {
//       return this.exec(str);
//     }
//     let ary = [],
//       res = this.exec(str);
//     while (res) {
//       //将每一次捕获的内容res[0]存放到数组中
//       ary.push(res[0]);
//       // =>只要捕获的内容不为null，继续不活下去
//       res = this.exec(str);
//     }
//     return ary.length === 0 ? null : ary;
//   }
//   RegExp.prototype.execAll = execAll;
// })();
// let reg = /\d+/g;
// console.log(reg.execAll('2021年11月24日')); //[ '2021', '11', '24' ]
// reg = /\d+/;
// console.log(reg.execAll('2021年11月24日')); //[ '2021', index: 0, input: '2021年11月24日', groups: undefined ]
// 字符串中的match方法，可以在执行一次的情况下，捕获到所有匹配的数据（前提正则也要设置g才可以）
// console.log('年月日'.match(reg)); //null
