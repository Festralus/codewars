function numberGenerator(num) {
  return function (action) {
    return action ? action(num) : num;
  };
}

const orderedNumbers = [];
function populateNumbers() {
  for (let i = 0; i <= 9; i++) {
    orderedNumbers.push(numberGenerator(i));
  }
}
populateNumbers();
const [zero, one, two, three, four, five, six, seven, eight, nine] =
  orderedNumbers;

function validateOperand(operand) {
  const isOperandExistingValue = operand !== null && operand !== undefined;
  const isOperandInRange = operand >= 0 && operand <= 9;

  if (isOperandInRange && isOperandExistingValue) return true;
  return false;
}

function actionGenerator(operation) {
  return function (rightOperand) {
    if (!validateOperand(rightOperand)) return;
    return function (leftOperand) {
      return operation(leftOperand, rightOperand);
    };
  };
}

const plus = actionGenerator((a, b) => a + b);
const minus = actionGenerator((a, b) => a - b);
const times = actionGenerator((a, b) => a * b);
const dividedBy = actionGenerator((a, b) => Math.floor(a / b));

console.log(seven(times(five()))); //  must return 35
console.log(four(plus(nine()))); //  must return 13
console.log(eight(minus(three()))); //  must return 5
console.log(nine(dividedBy(three()))); //  must return 3
