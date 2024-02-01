// 一次归并
const merge = (li, low, mid, high) => {
  // console.log('rucan', li, low, mid, high);
  let i = low;
  let j = mid + 1;
  arr = []; //临时变量，非原地排序
  while (i <= mid && j <= high) {
    if (li[i] < li[j]) {
      arr.push(li[i]);
      i++;
    } else {
      arr.push(li[j]);
      j++;
    }
  }
  while (i <= mid) {
    arr.push(li[i]);
    i++;
  }
  while (j <= high) {
    arr.push(li[j]);
    j++;
  }
  // li.splice(low, arr.length, ...arr);
  li.splice(low, high - low + 1, ...arr); //将数组中某一部分替换成排序好的顺序
};

const mergeSort = (li, low, high) => {
  //至少有两个元素，
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    mergeSort(li, low, mid); //递归左侧
    mergeSort(li, mid + 1, high); //递归右侧
    merge(li, low, mid, high); //将左侧和右侧合并起来
  }
  return li;
};
// const li = [8, 7, 6, 5, 4, 3, 2, 1, 0];
const li = Array.from(Array(5000), (v, k) => k).sort((a, b) => Math.random() - Math.random());
console.time();
console.log(mergeSort(li, 0, li.length - 1));
console.timeEnd();

// 分解：将列表越缩越小，直至分成一个元素。
// 终止条件：一个元素是有序的
// 合并：将两个有序列表归并，列表越大越好

/* 
  总结：
  三种排序算法的时间复杂度都是O(n*logn)
  一般情况下，就运行时间而言：
    快速排序<归并排序<堆排序
  三种排序算法的缺点：
    快速排序：极端情况下排序效率低
    归并排序：需要额外的内存开销(不是原地排序)
    堆排序：在快的排序算法中相对较慢
  稳定的算法(挨个换的排序)：冒泡、直接插入、归并
*/
