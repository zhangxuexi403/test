// 前k大问题，要用到小根堆
// 交换值
const swap = (A, i, j) => {
  let temp = A[i];
  A[i] = A[j];
  A[j] = temp;
};
// 维护最小堆性质
const minHeapify = (A, heapSize, i) => {
  let l = i * 2 + 1;
  let r = i * 2 + 2;
  let largest = i; //根、左子、右子比较，择最小与根交换
  if (l < heapSize && A[l] < A[i]) {
    largest = l;
  }
  if (r < heapSize && A[r] < A[largest]) {
    largest = r;
  }
  if (largest !== i) {
    swap(A, i, largest);
    minHeapify(A, heapSize, largest); //largest标记了比根小的子节点，继续向下。。。minHeapify
  }
  return A;
};
const topk = (A, k) => {
  // 前k个元素构建成最小堆
  let minHeap = A.splice(0, k);
  for (let i = Math.floor(minHeap.length / 2) - 1; i >= 0; i--) {
    minHeapify(minHeap, minHeap.length, i);
  }
  minHeap.heapSize = minHeap.length;
  // 剩余部分依次和小顶堆的顶部比较，大于小顶部堆顶部的会代替小顶堆顶部，然后heapify
  for (let i = 0; i < A.length; i++) {
    if (A[i] > minHeap[0]) {
      minHeap[0] = A[i];
      minHeapify(minHeap, minHeap.heapSize, 0);
    }
  }
  return minHeap; //因为小顶堆的缘故，这里打出来时倒序的
};

const arr = Array.from(Array(5000), (v, k) => k).sort((a, b) => Math.random() - Math.random());
console.time();
// console.log(topk([3, 4, 5, 1, 8, 7, 2], 5));
console.log(topk(arr, 10));
console.timeEnd();
