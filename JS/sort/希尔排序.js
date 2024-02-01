function insertSort(li, gap) {
  for (let i = gap; i < li.length; i++) {
    let tmp = li[i];
    let j = i - gap;
    while (j >= 0 && tmp < li[j]) {
      li[j + gap] = li[j];
      j -= gap;
    }
    li[j + gap] = tmp;
  }
}
function shellSort(li) {
  let gap = Math.floor(li.length / 2);
  while (gap > 0) {
    insertSort(li, gap);
    gap = Math.floor(gap / 2);
  }
  return li;
}
const li = Array.from(Array(5000), (v, k) => k).sort((a, b) => Math.random() - Math.random());
console.time();
console.log(shellSort(li));
console.timeEnd();

// 希尔排序(Shell Sort)是一种分组插入排序算法。
// 首先取一个整数d1=n/2,将元素分为d1个组，每组相邻元素之间距离为d1，在各组内进行直接插入排序。
// 取第二个整数d2=d1/2,即所有元素在同一组内进行直接插入排序。
// 希尔排序每趟并不使某些元素有序，而是使整体数据越来越接近有序；最后一趟排序使得所有数据有序。
// 希尔排序的时间复杂度讨论比较复杂，并且和选取的gap序列有关。
