// // apply
function _apply() {
  let [thisArg, args] = [...arguments];
  thisArg = Object(thisArg) || window;
  let fn = Symbol(1);
  thisArg[fn] = this;
  let result = thisArg[fn](...args);
  delete thisArg[fn];
  return result;
}
// // _apply(this,[1,2,3])
// // // Object.prototype.toString.apply(x,[1,2,3])
// class ListNode {
//   head = null;
//   length;
//   constructor() {}
//   createNode(index) {
//     let left = head;
//     let right = head.next;
//     index ?? this.length;
//     let num = 0;
//     while (index && right) {
//       num++;
//       if (num == index) {
//         let next = right.next.next;

//         right.next = next;
//       }
//       left = left.next;
//       right = rigth.next;
//     }
//     return head;
//   }
//   getNode() {}
//   getHeadNode() {}
// }

// // createNode
// class Node {
//   constructor(value, next) {
//     this.value = value;
//     this.next = next || null;
//   }
// }
// new Node(1, {});
// new Node(2, 3);
// new Node(3, null);
// (value:1,next:2)(value:2,next:3)
