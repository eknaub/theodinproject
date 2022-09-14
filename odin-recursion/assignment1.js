function fib(n) {
  let arr = [];
  for(let i = 0; i <= n; i++) {
    if(i < 2) arr.push(i);
    else {
      let sum  = (arr[i-1]) + (arr[i-2]);
      arr.push(sum);
    }
  }
  return arr;
}

function fibRecursive(n) {
  if (n < 1) return [0]
  if (n < 2) return [0, 1]
  const arr = fibRecursive(n - 1)
  return [...arr, arr[n-1] + arr[n-2]]
}

console.log("Fibonacci of n(5)");
console.log(fib(5));
console.log(fibRecursive(5));