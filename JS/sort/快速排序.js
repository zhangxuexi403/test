function demo(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let mid = partition(arr, left, right);
    demo(arr, left, mid - 1);
    demo(arr, mid + 1, right);
  }
  return arr;
  // 归位函数
  function partition(arr, left, right) {
    tmp = arr[left]; //取出暂存
    while (left < right) {
      while (arr[right] >= tmp && left < right) {
        right--;
      }
      arr[left] = arr[right];
      while (arr[left] <= tmp && left < right) {
        left++;
      }
      arr[right] = arr[left];
    }
    arr[left] = tmp;
    return left;
  }
}
const arr = Array.from(Array(5000), (v, k) => k).sort((a, b) => Math.random() - Math.random());
// console.log('未排序的', arr);
console.time();
console.log(demo(arr));
console.timeEnd();
