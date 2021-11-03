// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// arr.sort((a, b) => Math.random() - Math.random());
// console.log(arr.join(','));

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function shuffle(arr) {
  let i = arr.length;
  while (i) {
    let j = Math.floor(Math.random() * i--);
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
  return arr;
}
console.log(shuffle(arr));
