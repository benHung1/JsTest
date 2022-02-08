//Answer

function fib(position) {
  if (position < 2) return position;
  const fibArr = [0, 1];
  for (let i = 2; i <= position; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }
  return fibArr[position];
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
