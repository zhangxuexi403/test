// 1.数组去重
// const numbers = [1, 2, 3, 4, 4, 1];
// console.log([...new Set(numbers)]);
// 2.从数组中过滤所有虚值
// filter(it=>it) 效果等于 filter(it=> Boolean(it)),Boolean是一个函数，会堆遍历数组中的元素，并根据真假类型，对应的返回true或false
// const myArray = [{}, 1, undefined, null, 2, NaN, true, false, 3];
// console.log(myArray.filter(item => item));
// console.log(myArray.filter(Boolean));
// 3.将字符串转为数字
// const str = '123';
// const num = +str;
// console.log(typeof num);
// 4.将数字转换为字符串
// const num = 123;
// const str = num + '';
// console.log(typeof str);
// 5.使用&&符号简写条件判断语句
// if (condition) {
//   doSomething();
// }
// condition && doSomething(); //简写
// 6.console.table()打印特定格式的表单
