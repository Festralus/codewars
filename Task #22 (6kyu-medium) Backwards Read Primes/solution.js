function backwardsPrime(start, stop) {
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  let result = [];

  for (let i = start; i <= stop; i++) {
    if (!isPrime(i)) continue;

    let reversed = Number(String(i).split("").reverse().join(""));

    if (i !== reversed && isPrime(reversed)) {
      result.push(i);
    }
  }

  return result;
}

console.log(backwardsPrime(9900, 10000)); // expect [9923, 9931, 9941, 9967]
