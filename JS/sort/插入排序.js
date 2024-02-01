function demo(arr) {
  //摸牌的范围是1~length
  for (let i = 1; i < arr.length; i++) {
    tmp = arr[i]; //记录摸到的牌
    j = i; //手中牌的下标
    // 左侧的牌比摸到的牌大，则将左侧的排依次向右移
    while (j > 0 && arr[j - 1] > tmp) {
      arr[j] = arr[j - 1];
      j--;
    }
    // 左侧的牌小于等于摸到的牌，将摸到的牌插入左侧的牌之后
    arr[j] = tmp;
    // console.log('观察代码运行的过程', arr);
  }
  return arr;
}

// const arr = [1, 9, 2, 3, 4, 8, 7, 6, 5, 0];
// const arr = [1, 2, 3, 4, 5];
const arr = Array.from(Array(5000), (v, k) => k);

console.time();
console.log(demo(arr));
console.timeEnd();
