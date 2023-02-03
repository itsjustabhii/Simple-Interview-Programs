//How to find factorial of any number
//Step 1 - get number
let num = 5;

for (let i = num; i > 1; ) {
  i = i - 1;
  var factorial = num * i;
  num = factorial;
}
console.log(factorial);
