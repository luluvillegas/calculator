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

function populateDisplay(str) {
  let number = (display.textContent += str);
  //console.log(number);
}

let firstNumber;
let secondNumber;
let operator;
//let first = false;
//let second = false;
const display = document.querySelector(`.display`);

const numbersPad = Array.from(document.querySelectorAll(`.numbers > button`));
//console.log(numbers);
for (let i = 0; i <= numbersPad.length - 1; i++) {
  numbersPad[i].addEventListener(`click`, (e) => {
    //console.log(e.target.textContent);
    populateDisplay(e.target.textContent);
  });
}

const cleanBtn = document.querySelector(`.clean`);
cleanBtn.addEventListener(`click`, () => {
  display.innerHTML = ``;
});
