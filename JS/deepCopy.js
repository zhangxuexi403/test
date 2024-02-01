// 浅拷贝
// function shallowCopy(obj) {
//   if (typeof obj !== 'object') return;
//   let newObj = obj instanceof Array ? [] : {};
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// }

// 深拷贝
function deepClone(obj, hash = new WeakMap()) {
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);
  if (obj === null || typeof obj !== 'object') return obj;
  //这里改动
  //   if (hash.has(obj)) return obj;
  if (hash.has(obj)) return hash.get(obj);
  //找到的是所属类原型上的constructor，而原型上的constructor指向的是当前类本身
  let res = new obj.constructor();
  hash.set(obj, res);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 实现深拷贝
      res[key] = deepClone(obj[key], hash);
    }
  }
  return res;
}
let obj = { name: 1, address: { x: 100 } };
obj.o = obj; // 对象存在循环引用的情况
let d = deepClone(obj);
obj.address.x = 200;
console.log(d);
