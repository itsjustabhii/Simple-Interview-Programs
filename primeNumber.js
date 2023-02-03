/**To find if a number is a prime number or not */

let num = 17;
var isPrimeNumber = true;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrimeNumber = false;
  }
}

if (isPrimeNumber === true) {
  console.log(`${num} is a Prime Number`);
} else {
  console.log(`${num} is not a Prime Number`);
}
