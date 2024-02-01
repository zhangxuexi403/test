function demo(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i; //无序区的第一个索引先记作为本次循环的最小值
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j; //发现更小的j
      }
    }
    // 最小值就是无序区的第一个数字，minIndex没有发生改变，是不需要换位的(优化)
    if (i !== minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    // console.log('观察代码运行的过程', arr);
  }
  return arr;
}
// const arr = [4, 5, 3, 1, 2];
// const arr = [1, 2, 3, 4, 5];
const arr = Array.from(Array(5000), (v, k) => k);

console.time();
console.log(demo(arr));
console.timeEnd();
