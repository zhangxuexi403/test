function bucketSort(li, n = 100, maxNum = 10000) {
  // 创建二维数组，对应着n个桶，0~99
  const buckets = Array.from(new Array(n), () => {
    return new Array();
  });
  for (const x of li) {
    // 判断x在几号桶里，把1w放到99号桶里
    let i = Math.min(parseInt(x / parseInt(maxNum / n)), parseInt(n - 1));
    buckets[i].push(x); //将x放入到应该去的桶之中
    // 在桶中调整位置，冒泡
    for (let j = buckets[i].length - 1; j >= 1; j--) {
      if (buckets[i][j] < buckets[i][j - 1]) {
        [buckets[i][j], buckets[i][j - 1]] = [buckets[i][j - 1], buckets[i][j]];
      } else {
        break;
      }
    }
  }
  return buckets.flat(Infinity); //扁平
}
const li = Array.from(Array(5000), (v, k) => k).sort((a, b) => Math.random() - Math.random());
console.time();
console.log(bucketSort(li));
console.timeEnd();

// 在计数排序中，如果元素的范围比较大(比如在1到1亿之间)，如何改造算法?
// 桶排序(Bucket Sort)：首先将元素分在不同的桶中，在对每个桶中的元素排序。
// 1-1千万在一个桶，1千万到2千万在一个桶。。。999这个元素肯定进第一个桶
// 桶排序的表现取决于数据的分布。也就是需要对不同数据排序时采用不同的分桶策略。
// 平均情况时间复杂度：O(n+k)
// 最坏情况时间复杂度：O(n^2k)
// 空间复杂度：O(nk)
// 如果数据分布不均匀,数据都放到一个桶中,这就是最坏情况
