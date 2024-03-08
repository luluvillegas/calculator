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

function resetVariables() {
  firstNumber = 0;
  secondNumber = 0;
  number = 0;
}

let firstNumber;
let secondNumber;
let operator;
let number;
let operatorPressed = false;
const display = document.querySelector(`.display`);

const numbersPad = Array.from(document.querySelectorAll(`.numbers > button`));
for (let i = 0; i <= numbersPad.length - 1; i++) {
  numbersPad[i].addEventListener(`click`, (e) => {
    if (operatorPressed) {
      clearDisplay();
      operatorPressed = false;
    }
    populateDisplay(e.target.textContent);
  });
}

const operators = Array.from(document.querySelectorAll(`.operator`));
for (let j = 0; j <= operators.length - 1; j++) {
  operators[j].addEventListener(`click`, (e) => {
    operatorPressed = true;
    firstNumber = number;
    operator = e.target.textContent;
  });
}

const cleanBtn = document.querySelector(`.clean`);
cleanBtn.addEventListener(`click`, () => {
  clearDisplay();
});

const equalBtn = document.querySelector(`.equal`);
equalBtn.addEventListener(`click`, () => {
  operatorPressed = true;
  clearDisplay();
  secondNumber = number;
  let result = operate(firstNumber, secondNumber, operator);
  if (isNaN(result)) {
    populateDisplay(`Error`);
  } else {
    populateDisplay(result);
    resetVariables(firstNumber, secondNumber, result, number);
  }
});
