// console.log(1);
// process.nextTick(() => {
//   console.log(2);
// });
// setImmediate(() => {
//   console.log(3);
// });
// setTimeout(() => {
//   console.log(4);
// });
// new Promise(resolve => {
//   console.log(5);
//   resolve();
// }).then(() => {
//   console.log(6);
// });
// 全部的同步js代码不看作是一次宏任务的执行，把then和nextTick作为第一次的微任务，然后把setTimeout作为第一次的宏任务，等他们都执行完setImmediate紧跟其后执行
// 1 5 2 6 4 3
// -------
// Promise.resolve().then(() => {
//   console.log(1);
// });
// Promise.resolve().then(() => {
//   console.log(2);
// });
// process.nextTick(() => {
//   console.log(3);
//   process.nextTick(() => {
//     console.log(4);
//     process.nextTick(() => {
//       console.log(5);
//     });
//   });
// });
// 3 4 5 1 2
// ----------
setTimeout(() => {
  console.log(1);
});
setTimeout(() => {
  console.log(2);
});
// 两个单独的宏任务不能构成一个完整的宏微任务，这是宏任务可能是无序的。在添加一个微任务才能构成一个完整的宏微任，保证顺序，这时原则才不会被破坏。
/* 
    在任务队列中，按照入队的顺序去执行
    nextTick和then都为微任务，nextTick先入队，则先执行nextTick，即先2再6
    宏任务输出 3 4 同理
*/
/*
    node新增api使用方式
        process.nextTick微任务，不管什么时候进入微任务，都会在第一位执行。
        setImmediate宏任务，在第一轮时间轮询之后执行
        所以结合执行顺序和使用方式，可知process在then之前执行，不管它什么时候加入微任务队列，setImmediate在上述例子中在setTimeout之后执行，因为他必须在一轮时间轮询之后才能执行，不管他等待时间是多少。
 */
