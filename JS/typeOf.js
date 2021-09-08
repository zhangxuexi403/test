/** 
 typeof可以正确识别：Undefined、Boolean、Number、String、Symbol、Function等类型的数据，但是对于其他的都会认为是object，比如Null、Date等，，所以通过typeof来判断数据类型会不准确。但是可以使用Object.prototype.toString实现
 */
function typeOf(obj) {
  let res = Object.prototype.toString.call(obj).split(" ")[1];
  res = res.slice(0, -1).toLowerCase();
  return res;
}
console.log(typeOf([]));
console.log(typeOf({}));
console.log(typeOf(new Date()));
