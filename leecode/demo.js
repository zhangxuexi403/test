function flatten(arr) {
  const midValue = arr.reduce((pre, cur, index, array) => {
    // return Array.isArray(cur) ? [...pre, ...flatten(cur)] : [...pre, cur];
    return Array.isArray(cur) ? pre.concat(flatten(cur)) : pre.concat(cur);
  }, []);
  return midValue;
  // let midValue = arr.toString();
  // return [...new Set(midValue.split(',').map(item => parseInt(item)))];
}
const arr = [1, 2, 2, [2, 3], [5, [6]]];
console.log(flatten(arr));
