// 冒泡排序的优化
function demo(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let flag = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true; //如果元素换位，则flag变为true
        // console.log('观察代码运行的过程', arr);
      }
    }
    if (!flag) {
      console.log(`flag为false，余下列表没有换位，余下列表为有序列表`);
      break; //跳出i的循环
    }
  }
  return arr;
}
// const arr = [4, 5, 3, 1, 2];
// const arr = [1, 2, 3, 4, 5];
const arr = Array.from(Array(5000), (v, k) => k);

console.time();
console.log(demo(arr));
console.timeEnd();
