// todo查表问题
// 两个数组的交集 II-350
// 给定两个数组，编写一个函数来计算它们的交集。
// 示例 1:
// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2,2]
// 示例 2:
// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [4,9]
/**
 * ?为两个数组分别建立map，用来存储num->count的键值对，统计每个数字出现的数量。
 * ?然后对其中一个map进行遍历，查看这个数字在两个数组中分别出现的数量，取出现的最小的哪个数量
 * ?(比如数组1中出现了1次，数组2中出现了2次，那么交集应该取1次)，push到结果数组中即可。
 */
// function makeCountMap(nums) {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];
//     let count = map.get(num);
//     if (count) {
//       map.set(num, count + 1);
//     } else {
//       map.set(num, 1); //遍历数组，没在表中初始化为1
//     }
//   }
//   return map;
// }
// let intersect = function (nums1, nums2) {
//   let map1 = makeCountMap(nums1);
//   let map2 = makeCountMap(nums2);
//   let res = [];
//   for (const num of map1.keys()) {
//     const count1 = map1.get(num); //遍历的map1,在map1中肯定存在//在map1中的数量
//     const count2 = map2.get(num); //在map2中的数量
//     //如果map2中也有这个数字的话，就取最小值，就是要出现多少次
//     if (count2) {
//       const pushCount = Math.min(count1, count2);
//       for (let i = 0; i < pushCount; i++) {
//         res.push(num);
//       }
//     }
//   }
//   return res;
// };
// todo双指针问题
// 最接近的三数之和-16
// 给定一个包括n个整数的数组nums和一个目标值target。找出nums中的三个整数，使得它们的和于target最接近。返回这三个数的和。假定每组输入只存在唯一答案。
// 示例：
// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
/**
 * ?先按照升序排序，然后分别从左往右一次选择一个基础点i(0<=i<=nums.length-3),在基础点的右侧用双指针不断的找到最小的差值。
 * ?假设基础点是i，初始化的时候，双指针分别是：
 * ?left:i+1，基础点右边一位
 * ?right:nums.length-1数组最后一位
 * ?然后求此时的和，如果和大于target，那么可以把右指针往左移一位，去试试更小一点的值，反之则把左指针右移。
 * ?在这个过程中，不断更新全局的最小差值min，和此时记录下来的和res。
 * ?最后返回res即可
 */
function getSum(nums) {
  return nums.reduce((total, cur) => total + cur, 0);
}
let threeSumClosest = function (nums, target) {
  let n = nums.length;
  if (n === 3) {
    return getSum(nums);
  }
  // 先升序排序 此为解题的前置条件
  nums.sort((a, b) => a - b);
  let min = Infinity; // 和target的最小差
  let res;
  // 从左往右一次尝试定一个基础指针 右边至少再保留两位 否则无法凑成3个
  for (let i = 0; i < nums.length; i++) {
    let basic = nums[i];
    let left = i + 1; //左指针先从i右侧的第一位开始尝试
    let right = n - 1; //右指针先从数组最后一项开始尝试
    while (left < right) {
      let sum = basic + nums[left] + nums[right]; //三数求和
      // 更新最小差
      let diff = Math.abs(sum - target);
      if (diff < min) {
        min = diff;
        res = num;
      }
      if (sum < target) {
        // 求出的和如果小于目标值的话 可以尝试把做指针右移 扩大值
        left++;
      } else if (sum > target) {
        // 反之则右指针左移
      } else {
        return sum;
      }
    }
  }
  return res;
};
