// console.log('1');
setTimeout(function () {
  setTimeout(function () {
    console.log('111');
  });
  console.log('2');
  new Promise(function (resolve) {
    console.log('4');
    resolve();
  }).then(function () {
    console.log('5');
  });
});
// new Promise(function (resolve) {
//   console.log('7');
//   resolve();
// })
//   .then(function () {
//     console.log('8');
//   })
//   .then(function () {
//     console.log('11');
//   });
setTimeout(function () {
  console.log('9');

  new Promise(function (resolve) {
    console.log('11');
    resolve();
  }).then(function () {
    console.log('12');
  });
  setTimeout(function () {
    console.log('333');
  });
});
// // ? 1，7，8，11，2，9，4，5，11，12
