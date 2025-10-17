let X = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSequence(arr) {
  if (!arr.length || (arr.length === 1 && arr[0] < 0)) return 0;

  let currentSum = 0;
  let maxSum = 0;

  arr.forEach((num) => {
    currentSum = Math.max(0, currentSum + num);
    maxSum = Math.max(maxSum, currentSum);
  });

  return maxSum;
}

console.log(maxSequence(X)); // Excpeted output: 6
console.log(maxSequence([])); // Excpeted output: 0
