function score(dice) {
  const triplets = {
    1: 1000,
    6: 600,
    5: 500,
    4: 400,
    3: 300,
    2: 200,
  };

  const singles = {
    1: 100,
    5: 50,
  };

  let result = 0;
  let quant = {};

  // Count quantity of each number in the array
  for (let i = 0; i < dice.length; i++) {
    quant[dice[i]] = (quant[dice[i]] || 0) + 1;
  }

  // Count the result
  Object.entries(quant).forEach(([dice, score]) => {
    const digit = Number(dice);

    if (score >= 3) {
      result += triplets[digit];
      quant[digit] -= 3;
    }
    if (quant[digit] > 0 && (digit === 1 || digit === 5)) {
      result += quant[digit] * singles[digit];
    }
  });

  return result;
}

console.log(score([2, 3, 4, 6, 2])); // returns 0
console.log(score([4, 4, 4, 3, 3])); // returns 400
console.log(score([2, 4, 4, 5, 4])); // returns 450
console.log(score([1, 1, 1, 1, 2])); // returns 1100
console.log(score([5, 5, 5, 5, 5])); // returns 600
