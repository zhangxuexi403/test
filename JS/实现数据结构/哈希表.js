// 哈希表是一种实现关联数组的数组结构，这意味着它把键映射到值。javascript对象就是一个‘哈希表’，因为它存储键值对。
// 在讨论如何实现哈希表之前，需要讨论哈希函数的重要性。哈希函数的核心概念是它接受任意大小的输入并且返回固定长度的哈希值。
// hashThis('i want to hash this') => 7
// 哈希函数可能非常复杂或者直接。Github上的每个文件都经过hash处理。这使得每个文件的查找都非常快。哈希函数背后点击核心思想就是，给定相同的输入将返回值相同的输出。
// 在介绍哈希功能之后，讨论一下如何实现哈希表
// 将要讨论三个操作insert、get，最后是remove
class HashTable {
  constructor(size) {
    // 定义哈希表的大小。将在哈希函数中使用
    this.size = size;
    this.storage = [];
  }
  insert(key, value) {
    // 得到数组中的索引
    const index = this.myHashingFunction(key, this.size);
    // 处理冲突 - 如果哈希函数为不同的键返回相同的索引，
    // 在复杂的哈希函数中，很可能发生冲突
    if (!this.storage[index]) {
      this.storage[index] = [];
    }
    // push 新的键值对
    this.storage[index].push([key, value]);
  }
  get() {}
  remove(key) {
    // 首先要获取key的索引，请记住
    // 哈希函数将始终为同一个key，返回相同的索引
    const index = this.myHashingFunction(key, this.size);
    // 记住我们在一个索引处可以有多个数组(不太可能)
    let arrayAtIndex = this.storage[index];
    if (arrayAtIndex) {
      // 遍历该索引处的所有数组
      for (let i = 0; i < arrayAtIndex.length; i++) {
        // get the pair (a,1)
        let pair = arrayAtIndex[i];
        // 检查key是否与参数key匹配
        if (pair[0] === key) {
          delete arrayAtIndex[i];
          // 工作已经完成，所以要退出循环
          break;
        }
      }
    }
  }
  // 这是计算散列密钥的方式
  myHashingFunction(str, n) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i) * 3;
    }
    return sum % n;
  }
}
const myHT = new HashTable(5);
myHT.insert('a', 1);
// myHT.insert('a', 1);
myHT.insert('b', 2);
console.log(myHT, '111');
console.log(myHT.storage, '111');
