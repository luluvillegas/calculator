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
  let number = (display.textContent += num);
  if (number.length > maxDisplayLength) {
    alert(`It is a 9 digit calculator. Your number might have been truncated`);
    number = number.substring(0, 9); //change to const max display length
    display.textContent = number;
  }
}

function clearDisplay() {
  display.innerHTML = ``;
}

function roundNumber(n) {
  return Math.round(n * 100000) / 100000;
}

function removePressedOperator() {
  operatorsButtons.forEach((button) => {
    button.removeAttribute(`style`);
  });
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
    //operatorPressed = false;
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
  let result = operate(firstNumber, secondNumber, currentOperator);
  populateDisplay(roundNumber(result));
  cleanScreen = true;
}

function resetVariables() {
  firstNumber = ``;
  secondNumber = ``;
  operator = ``;
  currentOperator = ``;
  operatorPressed = false;
  removePressedOperator();
  pointBtn.disabled = false;
}

let firstNumber = ``;
let secondNumber = ``;
let operator = ``;
let operatorPressed = false;
let cleanScreen = false;
const maxDisplayLength = 9;
const display = document.querySelector(`.display > p`);
const numbersButtons = document.querySelectorAll(`.numbers > button`);
const operatorsButtons = document.querySelectorAll(`.operator`);
const cleanBtn = document.querySelector(`.clean`);
const backspaceBtn = document.querySelector(`.backspace`);
const equalBtn = document.querySelector(`.equal`);
const pointBtn = document.querySelector(`.point`);

numbersButtons.forEach((button) =>
  button.addEventListener(`click`, () => {
    if (cleanScreen) {
      clearDisplay();
      cleanScreen = false;
    }
    if (button.classList.contains(`point`)) {
      pointBtn.disabled = true;
    }
    populateDisplay(button.textContent);
  })
);

operatorsButtons.forEach((button) =>
  button.addEventListener(`click`, () => {
    if (operatorPressed) {
      removePressedOperator();
    }
    operatorPressed = true;
    button.style.backgroundColor = `#e0d6ff`;
    pointBtn.disabled = false;
    operator = button.textContent;
    setOperation(operator);
  })
);

cleanBtn.addEventListener(`click`, () => {
  clearDisplay();
  resetVariables();
});

backspaceBtn.addEventListener(`click`, () => {
  display.textContent = display.textContent.substring(
    0,
    display.textContent.length - 1
  );
});

equalBtn.addEventListener(`click`, () => {
  operatorPressed = false;
  removePressedOperator();
  evaluateOperation();
  resetVariables();
});
