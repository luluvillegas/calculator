function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(fNumber, sNumber, op) {
  switch (op) {
    case `+`:
      add(fNumber, sNumber);
      break;
    case `-`:
      substract(fNumber, sNumber);
      break;
    case `*`:
      multiply(fNumber, sNumber);
      break;
    case `/`:
      divide(fNumber, sNumber);
      break;
  }
}

let firstNumber;
let secondNumber;
let operator;
