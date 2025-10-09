function zero(action) {
  if (action) return action(0);
  else return 0;
}
function one(action) {
  if (action) return action(1);
  else return 1;
}
function two(action) {
  if (action) return action(2);
  else return 2;
}
function three(action) {
  if (action) return action(3);
  else return 3;
}
function four(action) {
  if (action) return action(4);
  else return 4;
}
function five(action) {
  if (action) return action(5);
  else return 5;
}
function six(action) {
  if (action) return action(6);
  else return 6;
}
function seven(action) {
  if (action) return action(7);
  else return 7;
}

function eight(action) {
  if (action) return action(8);
  else return 8;
}
function nine(action) {
  if (action) return action(9);
  else return 9;
}

function plus(rightOperand) {
  if (rightOperand >= 0 && rightOperand <= 9) {
    return function (leftOperand) {
      return leftOperand + rightOperand;
    };
  } else if (rightOperand < 0 || rightOperand > 9) {
    console.error("Error: Please enter numbers ranging from 0 to 9");
  } else if (rightOperand === null || rightOperand === undefined) {
    console.error("Error: unknown variables");
  } else {
    console.error("Error");
  }
}
function minus(rightOperand) {
  if (rightOperand >= 0 && rightOperand <= 9) {
    return function (leftOperand) {
      return leftOperand - rightOperand;
    };
  } else if (rightOperand < 0 || rightOperand > 9) {
    console.error("Error: Please enter numbers ranging from 0 to 9");
  } else if (rightOperand === null || rightOperand === undefined) {
    console.error("Error: unknown variables");
  } else {
    console.error("Error");
  }
}
function times(rightOperand) {
  if (rightOperand >= 0 && rightOperand <= 9) {
    return function (leftOperand) {
      return leftOperand * rightOperand;
    };
  } else if (rightOperand < 0 || rightOperand > 9) {
    console.error("Error: Please enter numbers ranging from 0 to 9");
  } else if (rightOperand === null || rightOperand === undefined) {
    console.error("Error: unknown variables");
  } else {
    console.error("Error");
  }
}
function dividedBy(rightOperand) {
  if (!validateOperand(rightOperand)) return;
  if (rightOperand >= 0 && rightOperand <= 9) {
    return function (leftOperand) {
      return (leftOperand / rightOperand).toFixed(0);
    };
  }
}

function validateOperand(operand) {
  const isOperandInRange = operand >= 0 || operand <= 9;
  const isOperandExistingValue = operand !== null || operand !== undefined;

  if (isOperandInRange && isOperandExistingValue) return true;
  return false;
}

console.log(seven(times(five()))); //  must return 35
console.log(four(plus(nine()))); //  must return 13
console.log(eight(minus(three()))); //  must return 5
console.log(six(dividedBy(two()))); //  must return 3
