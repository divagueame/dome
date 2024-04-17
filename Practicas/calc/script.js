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
    if (a === 0) {
        return "Error: Division by zero,Nice try!";
    }else{
        return a / b;
    }
}

let firstNumber = "";
let secondNumber = "";
let operator = "";
let resultValue = "";

function operate(operator, a, b) {
    first =  parseFloat(a)
    second =  parseFloat(b)

    switch (operator) {
        case '+':
            return add(a, b)
        case '-':
            return subtract(a, b)
        case '*':
            return multiply(a, b)
        case '/':
            return divide(a, b);
        default:
            return "Error";
    }
}  

function logger(){

    console.log("firstNumber:" , firstNumber);
    console.log("operator:", operator);
    console.log("secondNumber:", secondNumber);
}

function updateDisplayElements (type) {
     
    const display = document.getElementById('display')
    if ( type === 'clear'){
        display.value = ''
    }else{
        display.value = firstNumber + " " + operator + " " + secondNumber
    }
}
updateDisplayElements()

function inputNumber(){
    
    const buttonNumber = document.querySelectorAll('.number');
    buttonNumber.forEach(button => {
        button.addEventListener ('click', function(){
            if (secondNumber === "" && operator === ""){
                
                firstNumber += button.value;

            }else {

                secondNumber += button.value;
            }
            logger();
            updateDisplayElements();
        });
    }); 
}

function resetCalculator () {
    updateDisplayElements('clear');
    firstNumber = "" ;
    secondNumber = "" ;
    operator = "" ;

}

function deleteLast () {
    if (operator === ''){
        firstNumber = firstNumber.slice(0, -1);
    }else if (operator === "operator"){
        operator = operator.slice(0, -1)
    }else{
        secondNumber = secondNumber.slice(0, -1);

    }
}

function inputOperator() {
    const operatorButton = document.querySelectorAll('.operator');

    operatorButton.forEach(button => {
        button.addEventListener ('click', function(){
            
            if (button.value === 'AC'){
                resetCalculator();
            
            }else if (button.value === 'DEL'){
                deleteLast();
            
            // }else if (button.value === '.' && (updateDisplayElements() === "" || display.value.includes('.'))){
            //     return;

            }else {
                // firstNumber = parseFloat(firstNumber);
                operator = button.value;
            } 
            logger();
            updateDisplayElements();
        });
    });

}

function calculateResult (){
    const equalButton = document.querySelector('#equals');
    equalButton.addEventListener ('click', function(){

       if (firstNumber !== "" && operator !== "") { 
            // operator = operator;
            // a = firstNumber;
            // b = secondNumber;
            resultValue = operate(operator, a, b);
        } else {
            console.error("Error");
        }

    }
)
updateDisplayElements();
logger();

}

inputNumber();
inputOperator();
calculateResult();
