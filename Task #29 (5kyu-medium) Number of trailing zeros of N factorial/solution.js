function zeros(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
}

console.log(zeros(6)); // expect 1
console.log(zeros(12)); // expect 2
console.log(zeros(100)); // expect 24
