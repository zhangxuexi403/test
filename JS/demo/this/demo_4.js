// ~(function () {
//   function call(context) {
//     context = context || window;
//     let args = [],
//       result;
//     for (let i = 1; i < arguments.length; i++) {
//       args.push(arguments[i]);
//     }
//     context.$fn = this;
//     result = context.$fn(...args);
//     delete context.$fn;
//     return result;
//   }
//   //扩展到内置类的原型上
//   Function.prototype.call = call;
// })();
