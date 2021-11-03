// 交换值
const swap = (A, i, j) => {
  let temp = A[i];
  A[i] = A[j];
  A[j] = temp;
};
// 维护最大堆性质
const maxHeapify = (A, heapSize, i) => {
  let l = i * 2 + 1;
  let r = i * 2 + 2;
  let largest = i; //根、左子、右子比较，择最大与根交换
  if (l < heapSize && A[l] > A[i]) {
    largest = l;
  }
  if (r < heapSize && A[r] > A[largest]) {
    largest = r;
  }
  if (largest !== i) {
    swap(A, i, largest);
    maxHeapify(A, heapSize, largest); //largest标记了比根大的子节点，继续向下。。。maxHeapify
  }
  return A;
};
//从最小子树开始向上build大顶堆
const buildMaxHeap = A => {
  //边界：由完全二叉树性质得知，子节点i找父节点,父节点为(i-1)/2,数组索引0~n-1.故(n-2)/2==>Math.floor(n/2)-1为最后一个叶子节点的根。
  for (let i = Math.floor(A.length / 2) - 1; i >= 0; i--) {
    maxHeapify(A, A.length, i);
  }
};
const heapSort = A => {
  buildMaxHeap(A);
  A.heapSize = A.length;
  for (let i = A.length - 1; i >= 0; i--) {
    swap(A, 0, i); //交换最大的和最后一个叶子节点
    A.heapSize--;
    maxHeapify(A, A.heapSize, 0); //根节点不再是大根堆，从根开始heapify
  }
  return A;
};
const arr = Array.from(Array(5000), (v, k) => k).sort((a, b) => Math.random() - Math.random());
console.time();
console.log(heapSort(arr));
// console.log(heapSort([3, 4, 5, 1, 5, 7, 2]));
console.timeEnd();
