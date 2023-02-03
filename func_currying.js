// const getSum = (a) => {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return function (e) {
//           console.log(a + b + c + d + e);
//         };
//       };
//     };
//   };
// };

// getSum(5)(4)(3)(2)(1);

//To solve in one line
const getSum = (a) => (b) => (c) => (d) => (e) => a + b + c + d + e;
const total = getSum(5)(4)(3)(2)(1);
console.log(total);
