const solution = function (firstArray, secondArray) {
  const subtractedNums = [];
  for (const n in firstArray) {
    subtractedNums.push(firstArray[n] - secondArray[n]);
  }

  const squaredNums = subtractedNums.map((n) => n * n);
  const totalNum = squaredNums.reduce((a, b) => {
    return a + b;
  });
  const result = totalNum / firstArray.length;
  return result;
};

console.log(solution([10, 20, 10, 2], [10, 25, 5, -2])); // returns 16.5
console.log(solution([1, 2, 3], [4, 5, 6])); // returns 9
console.log(solution([-1, 0], [0, -1])); // returns 1
