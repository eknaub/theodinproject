const currentNumberTxt = document.querySelector('.currentNumber');
const displayNumberTxt = document.querySelector('.displayNumber');
const displayOperatorTxt = document.querySelector('.displayOperator');

let firstNumber = null;
let nextNumber = null;
let currentOperator = null;
let wasOperatorPressed = false;

document.addEventListener('keypress', keyPressed);

const removeBtn = document.querySelector('.settings.remove');
removeBtn.addEventListener('click', removeLastCharOfInput);

const clearBtn = document.querySelector('.settings.clear');
clearBtn.addEventListener('click', clear);

const negateBtn = document.querySelector('.settings.negate');
negateBtn.addEventListener('click', negateCurrentInput);

const dotBtn = document.querySelector('#dot');
dotBtn.addEventListener('click', appendDot);

const equalsBtn = document.querySelector('#equals');
equalsBtn.addEventListener('click', equalsPressed);

const digitBtns = document.querySelectorAll('.number');
digitBtns.forEach((button) => {
  button.addEventListener('click', () => {
    appendNumber(button.textContent);
  })
});

const operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach((button) => {
  button.addEventListener('click', () => {
    operatorPressed(button.textContent);
  })
});

function keyPressed(e) {
  const button = document.querySelector(`button[data-key="${e.keyCode}"]`);
  if(!button) return;
  
  if(button.classList.contains('number')) {
    appendNumber(button.textContent);
  }
  else if(button.classList.contains('operator')) {
    operatorPressed(button.textContent);
  }
  else if(button.classList.contains('remove')) {
    removeLastCharOfInput();
  }
  else if (button.id === 'dot'){
    appendDot();
  }
  else if (button.id === 'equals'){
    equalsPressed();
  }
}

function appendDot() {
  if(currentNumberTxt.textContent.includes('.')) return;
  currentNumberTxt.textContent += '.';
}

function equalsPressed() {
  if(firstNumber === null) return;
  
  let tempFirstNumber = firstNumber;
  nextNumber = Number(currentNumberTxt.textContent);
  firstNumber = round(operate(currentOperator, firstNumber, nextNumber));
  if(firstNumber === null) {
    dividedByZero();
  }
  else {
    displayNumberTxt.textContent = `${tempFirstNumber} ${currentOperator} ${nextNumber} =`;
    displayOperatorTxt.textContent = '';
    currentNumberTxt.textContent = firstNumber;
    currentOperator = null;
  }

  wasOperatorPressed = true;
}

function resetCalculator() {
  firstNumber = null;
  nextNumber = null;
  currentOperator = null;
  wasOperatorPressed = false;
  currentNumberTxt.textContent = '0';
  displayNumberTxt.textContent  = '';
  displayOperatorTxt.textContent  = '';
}

function clear() {
  resetCalculator();
}

function negateCurrentInput() {
  if(currentNumberTxt.textContent.charAt(0) === '-') {
    currentNumberTxt.textContent = currentNumberTxt.textContent.substring(1, currentNumberTxt.textContent.length);
  }
  else {
    currentNumberTxt.textContent = `-${currentNumberTxt.textContent}`;
  }
}

function removeLastCharOfInput() {
  if(currentNumberTxt.textContent.length === 1) {
    currentNumberTxt.textContent = '0';
  }
  else {
    currentNumberTxt.textContent = currentNumberTxt.textContent.substring(0, currentNumberTxt.textContent.length-1);
  }
}

function appendNumber(input) {
  if(wasOperatorPressed) {
    wasOperatorPressed = false;
    currentNumberTxt.textContent = '';

  }
  else if(currentNumberTxt.textContent === '0') {
    currentNumberTxt.textContent = '';
  }
  currentNumberTxt.textContent += input;
}

function operatorPressed(input) {
  /*
    1st time pressed: save currentNumber and the currentOperator
                      (to display and variables)
    2nd time pressed: use number/operator from 1st and currentNumber
                      save solution and currentOperator
                      display at top current solution and Operator from 1st
                      display in box current solution
    3rd time pressed: ...

    1st time pressed: save currentNumber and the currentOperator
                      (to display and variables)
    Equals pressed: use number/operator from 1, and currentNumber
                    displya at top number/operator from 1 and
                    secondnumber and operator from current
                    display in box only solution
  */
  if(currentOperator === null) {
    firstNumber = Number(currentNumberTxt.textContent);
    currentOperator = input;
    displayNumberTxt.textContent = firstNumber;
    displayOperatorTxt.textContent = currentOperator;
  }
  else {
    nextNumber = Number(currentNumberTxt.textContent);
    firstNumber = round(operate(currentOperator, firstNumber, nextNumber));
    if(firstNumber === null) {
      dividedByZero();
    }
    else {
      displayNumberTxt.textContent = firstNumber;
      displayOperatorTxt.textContent = input;
      currentNumberTxt.textContent = firstNumber;
      currentOperator = input;
    }
  }

  wasOperatorPressed = true;
}

function dividedByZero() {
  resetCalculator();
  currentNumberTxt.textContent = 'Can\'t divide by 0';
}

function round(num) {
  if(num === null) return null;
  return Math.round(num * 100) / 100;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  switch(operator) {
    case '+':
      return add(a,b);
    case '-':
      return subtract(a,b);
    case '*':
      return multiply(a,b);
    case '/':
      if(b === 0) return null;
      return divide(a,b);
    default:
      return;
  }
}