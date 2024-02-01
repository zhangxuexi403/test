function radixSort(arr) {
  let buckets = new Array(10); // 定义二维数组buckets,每个桶就是一个一维数组
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = new Array(arr.length); //防止数据溢出，将每个桶的容量设置为极限的arr.length(空间换时间)
  }
  let buckeElementCounts = new Array(10).fill(0); //一维数组记录每个桶中存放数据的个数
  let max = Math.max(...arr); //得到数组中最大值
  let maxLength = (max + '').length; //得到最大值的位数
  for (let i = 0, n = 1; i < maxLength; i++, n = n * 10) {
    // 每一轮，对每个元素的各个位数进行排序处理
    // 第一次是个位数，第二次是十位数，第三次是百位数
    for (let j = 0; j < arr.length; j++) {
      //取出每个元素的各位的值
      let digitOfElement = Math.floor(arr[j] / n) % 10;
      buckets[digitOfElement][buckeElementCounts[digitOfElement]] = arr[j];
      buckeElementCounts[digitOfElement]++;
    }
    let index = 0;
    for (let k = 0; k < buckeElementCounts.length; k++) {
      // 如果桶中有数据，才放入原数组
      if (buckeElementCounts[k] !== 0) {
        // 循环该桶即第k个桶，即第k个一维数组，放入
        for (let l = 0; l < buckeElementCounts[k]; l++) {
          //取出元素放入arr
          arr[index] = buckets[k][l];
          //arr下标后移
          index++;
        }
        // 每轮处理后，下标要清0
        buckeElementCounts[k] = 0;
      }
    }
  }
  //按照这个桶的顺序，以数组的下标依次取出数据，放入原来的数组中
  return arr;
}

// const arr = [123456, 10, 11, 1, 1, 1, 1, 2, 4, 3, 5, 6, 8, 7, 9];
const arr = Array.from(Array(5000), (v, k) => k).sort((a, b) => Math.random() - Math.random());
console.time();
console.log(radixSort(arr));
console.timeEnd();

/* 
    多关键字排序:假如现在有一个员工表,要求按照薪资排序,年龄相同的员工按照年龄排序.
    先按照年龄进行排序,再按照薪资进行稳定的排序
    对32,13,94,52,17,54,93排序,是否可以看作多关键字排序?
    *桶排序是分一次桶，然后在桶中排序
    *基数排序是分多次桶，按顺序输出，桶内并没有排序的过程。排序原理是因为桶是有序的。
    *iteration迭代
    时间复杂度：O(kn)线性时间复杂度
    空间复杂度：O(k+n)
    k表示数字位数
*/
