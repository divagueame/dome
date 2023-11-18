let currentInput = '';
let operator = '';
let operand1 = '';
let operand2 = '';

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById('display').value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  document.getElementById('display').value = currentInput;
  operand1 = '';
  operand2 = '';
  operator = '';
}

function setOperator(op) {
  if (currentInput !== '') {
    operator = op;
    operand1 = parseFloat(currentInput);
    currentInput += op;
    document.getElementById('display').value = currentInput;
  }
}

function calculateResult() {
  if (operator !== '') {
    const operands = currentInput.split(operator);
    if (operands.length === 2) {
      operand2 = parseFloat(operands[1]);
      switch (operator) {
        case '+':
          currentInput = add(operand1, operand2).toString();
          break;
        case '-':
          currentInput = subtract(operand1, operand2).toString();
          break;
        case '*':
          currentInput = multiply(operand1, operand2).toString();
          break;
        case '/':
          currentInput = divide(operand1, operand2).toString();
          break;
      }
      document.getElementById('display').value = currentInput;
      operand1 = parseFloat(currentInput);
      operand2 = '';
      operator = '';
    }
  }
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y !== 0) {
    return x / y;
  } else {
    return 'Error';
  }
}
