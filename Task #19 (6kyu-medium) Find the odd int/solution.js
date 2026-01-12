function findOdd(A) {
  const count = {};

  for (let num of A) {
    count[num] = (count[num] || 0) + 1;
  }

  for (let num in count) {
    if (count[num] % 2 !== 0) {
      return Number(num);
    }
  }
}

console.log(findOdd([1, 1, 2])); // expect 2
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // expect 4
