function numberGenerator(num) {
  return function (action) {
    return action ? action(num) : num;
  };
}
const zero = numberGenerator(0);
const one = numberGenerator(1);
const two = numberGenerator(2);
const three = numberGenerator(3);
const four = numberGenerator(4);
const five = numberGenerator(5);
const six = numberGenerator(6);
const seven = numberGenerator(7);
const eight = numberGenerator(8);
const nine = numberGenerator(9);

// function actionGenerator(action) {
//   if (!action) return;
// }

function plus(rightOperand) {
  if (!validateOperand(rightOperand)) return;
  return function (leftOperand) {
    return leftOperand + rightOperand;
  };
}
function minus(rightOperand) {
  if (!validateOperand(rightOperand)) return;
  return function (leftOperand) {
    return leftOperand - rightOperand;
  };
}

function times(rightOperand) {
  if (!validateOperand(rightOperand)) return;
  return function (leftOperand) {
    return leftOperand * rightOperand;
  };
}

function dividedBy(rightOperand) {
  if (!validateOperand(rightOperand)) return;
  return function (leftOperand) {
    return Math.floor(leftOperand / rightOperand);
  };
}

function validateOperand(operand) {
  const isOperandInRange = operand >= 0 && operand <= 9;
  const isOperandExistingValue = operand !== null && operand !== undefined;

  if (isOperandInRange && isOperandExistingValue) return true;
  return false;
}

console.log(seven(times(five()))); //  must return 35
console.log(four(plus(nine()))); //  must return 13
console.log(eight(minus(three()))); //  must return 5
console.log(nine(dividedBy(three()))); //  must return 3
