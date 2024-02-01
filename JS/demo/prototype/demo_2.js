~(function () {
  /**
   * myUnique:实现数组去重
   * @params
   * @return
   * @date 2021-11-21
   * [Array] 去重后的数组
   */
  function myUnique() {
    console.log(this, 'this');
    //此时美誉传递操作的ary，但是方法中的this是当前要操作的数组，ary.myUnique()
    let obj = {};
    for (let i = 0; i < this.length; i++) {
      let item = this[i];
      if (typeof obj[item] !== 'undefined') {
        this[i] = this[this.length - 1];
        this.length--;
        i--;
        continue;
      }
      obj[item] = item;
    }
    obj = null;
    return this; //链式调用需要return this;
  }
  //扩展到内置类的原型链上
  Array.prototype.myUnique = myUnique;
})();
let ary = [12, 23, 13, 12, 23, 24, 34, 13, 23];
ary.myUnique().sort((a, b) => a - b);
//链式写法（保证返回值依然是当前类的实例 一般都会return this）
console.log(ary);
