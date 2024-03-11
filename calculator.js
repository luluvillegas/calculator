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
  fNumber = Number(fNumber);
  sNumber = Number(sNumber);
  switch (op) {
    case `+`:
      return add(fNumber, sNumber);
    case `-`:
      return substract(fNumber, sNumber);
    case `*`:
      return multiply(fNumber, sNumber);
    case `/`:
      return divide(fNumber, sNumber);
  }
}

function populateDisplay(num) {
  number = display.textContent += num;
}

function clearDisplay() {
  display.innerHTML = ``;
}

function setOperation(op) {
  if (firstNumber === ``) {
    firstNumber = display.textContent;
    currentOperator = op;
    operatorPressed = true;
    cleanScreen = true;
  } else {
    evaluateOperation();
    currentOperator = operator;
    firstNumber = display.textContent;
    operatorPressed = false;
  }
}

function evaluateOperation() {
  if (firstNumber === ``) {
    return;
  }
  secondNumber = display.textContent;
  if (currentOperator === `/` && secondNumber === `0`) {
    clearDisplay();
    resetVariables();
    alert(`You can't divide by 0`);
    return;
  }
  clearDisplay();
  populateDisplay(operate(firstNumber, secondNumber, currentOperator));
  cleanScreen = true;
}

function resetVariables() {
  firstNumber = ``;
  secondNumber = ``;
  operator = ``;
  currentOperator = ``;
  operatorPressed = false;
}

let firstNumber = ``;
let secondNumber = ``;
let operator = ``;
let operatorPressed = false;
let cleanScreen = false;
const display = document.querySelector(`.display`);
const numbersButtons = document.querySelectorAll(`.numbers > button`);
const operatorsButtons = document.querySelectorAll(`.operator`);
const cleanBtn = document.querySelector(`.clean`);
const equalBtn = document.querySelector(`.equal`);

numbersButtons.forEach((button) =>
  button.addEventListener(`click`, () => {
    if (cleanScreen) {
      clearDisplay();
      cleanScreen = false;
    }
    populateDisplay(button.textContent);
  })
);

operatorsButtons.forEach((button) =>
  button.addEventListener(`click`, () => {
    operatorPressed = true;
    operator = button.textContent;
    setOperation(operator);
  })
);

cleanBtn.addEventListener(`click`, () => {
  clearDisplay();
  resetVariables();
});

equalBtn.addEventListener(`click`, () => {
  operatorPressed = false;
  evaluateOperation();
  resetVariables();
});
