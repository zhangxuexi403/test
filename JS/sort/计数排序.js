function demo(arr, maxCount) {
  let count = new Array(maxCount + 1); //桶的容量
  let arrIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!count[arr[i]]) {
      count[arr[i]] = 1;
    } else {
      count[arr[i]] += 1;
    }
  }
  for (let j = 0; j < count.length; j++) {
    while (count[j] > 0) {
      arr[arrIndex++] = j;
      count[j]--;
    }
  }
  return arr;
}
const li = Array.from(Array(101), (v, k) => k).sort((a, b) => Math.random() - Math.random());
// const li = [1, 3, 2, 4, 1, 2, 3, 1, 3, 5];
console.time();
console.log(demo(li, 100));
console.timeEnd();
