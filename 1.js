// 1 1 2 3 5 8 13
// []
// const arr = [1, 1, 2, 3, 5];
function handle(arr = [], num = 0) {
  let targteNum = 0;
  if (arr.length <= 2) {
    return 1;
  } else {
    targteNum = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(targteNums);
  }
  return arr;
}
const result = handle([], 5);
console.log(result);
