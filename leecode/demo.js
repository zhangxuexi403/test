function flatten(arr) {
  // const result
  //   const midValue = arr.reduce((pre, cur, index, array) => {
  //     Array.isArray(cur) ? [pre, ...flatten(cur)] : pre.concat(cur);
  //   }, []);
  let midValue = arr.toString();
  return [...new Set(midValue.split(',').map(item => parseInt(item)))];
}
const arr = [1, 2, 2, [2, 3], [5, [6]]];
console.log(flatten(arr));
