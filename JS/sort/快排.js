function quickSort(arr) {
  if (arr.length < 2) return arr;
  let midIndex = Math.floor(arr.length >> 1);
  let midValue = arr.splice(midIndex, 1)[0];
  let left = [],
    right = [];
  for (let i = 0; i < arr.length; i++) {
    if (1) {
      if (midValue > arr[i]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }
  //   return quickSort(left).concat([midValue], quickSort(right));

  return [...quickSort(left), midValue, ...quickSort(right)];
}
console.log(quickSort([1, 9, 2, 3, 4, 8, 7, 6, 5, 0]));
// function quickSort(arr) {
//   if (arr.length <= 1) return arr;
//   let index = Math.floor(arr.length / 2);
//   let pivot = arr.splice(index, 1)[0],
//     left = [],
//     right = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (pivot > arr[i]) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return quickSort(left).concat([pivot], quickSort(right));
// }
