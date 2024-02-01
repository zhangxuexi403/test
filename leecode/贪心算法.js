// 贪心算法
// 基本概念
// 贪心算法(又称贪婪算法)是指，在队问题求解时，总是做出在当前看来是最好的选择。也就是说，不从整体最优上加以考虑，他所作出的是某种意义上的局部最优解。
// 贪心算法不是对所有问题都能得到整体最优解，关键是贪心策略的选择，选择的贪心策略必须具备无后效性，即某个状态以前的过程不会影响以后的状态，只与当前的状态有关。
// ?本质：当一个问题特别复杂难以解决时，考虑贪心算法。贪心算法解出的不一定是最优解，是局部的最优解，趋近于最完美的方案。
// ?买卖股票最佳时机
// export default prices => {
//   let count = 0;
//   //   i是遍历指针，j是当前，j+1是下一时刻
//   for (let i = 0, len = prices.length; i < len; i++) {
//     for (let j = i; j < len - 1; j++) {
//       // 上涨趋势
//       if (prices[j + 1] > prices[j]) {
//         count += prices[j + 1] - prices[j];
//         i = j; //买入
//       } else {
//         i = j;
//         break;
//       }
//     }
//   }
//   return count;
// };
// ?柠檬水找零
export default input => {
  // 表示自己的钱箱(用于存储零钱)
  let hand = [];
  //   判断是否又顾客存在
  while (input.length) {
    // 去除当前排在最前面顾客的钱
    let money = input.shift();
    if (money === 5) {
      handl.push(money);
    } else {
      // 手中的钱降序排列
      hand.sort((a, b) => b - a);
      // 顾客的钱 - 饮料的钱 = 需要找给顾客的钱
      let change = monet - 5;
      for (let i = 0, len = hand.length; i < len; i++) {
        if (hand[i] <= change) {
          change -= hand[i]; // 计算还需要找多少钱
          hand.splice(i, 1); // 剔除钱

          i--; // 要处理边界// 删除了元素，数组的长度发生了变化，要维持刚才的i不变
        }
        if (change === 0) {
          break;
        }
      }
      // 没有足够的零钱找给顾客
      if (change !== 0) {
        return false;
      } else {
        // 顾客的钱存起来
        hand.push(money);
      }
    }
  }
  return true;
};
