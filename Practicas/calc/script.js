let firstNumber = '';
let operator = '';
let secondNumber = '';

function clearDisplay() {
    document.getElementById('display').value = '';
    firstNumber = '';
    operator = '';
    secondNumber = '';
}

function deleteLast() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

function inputDecimal() {
    let currentValue = document.getElementById('display').value;
    if (!currentValue.includes('.')) {
        document.getElementById('display').value += '.';
    }
}

function inputNumber(number) {
    document.getElementById('display').value += number;
}

function setOperator(selectedOperator) {
    operator = selectedOperator;
    firstNumber = document.getElementById('display').value;
    document.getElementById('display').value = '';
    
}

function calculate() {
    secondNumber = document.getElementById('display').value;
    let result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    document.getElementById('display').value = result;
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
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Error: Invalid operator";
    }
}