let currentNumber = ''
let previousNumber = ''
let operator = null

function appendNumber(number) {
    currentNumber = currentNumber + number;
    showOnDisplay(currentNumber)
}

function addOperator(currentOperator) {
    if (currentNumber === '') return;
    if (previousNumber !== '') evaluateResult();
    previousNumber = currentNumber;
    operator = currentOperator
    currentNumber = ''
}

function evaluateResult() {

    if (previousNumber === '' || currentNumber === '' || operator === null) return

    const prev = parseFloat(previousNumber)
    const curr = parseFloat(currentNumber)

    let result = 0;

    switch (operator) {
        case '+':
            result = prev + curr
            break;
        
        case '-':
            result = prev - curr
            break;
        
        case '*':
            result = prev * curr
            break;
        
        case '/':
            result = prev / curr
            break;

        default:
            return;
    }
    currentNumber = result.toString()
    previousNumber = ''
    operator = null
    showOnDisplay()
}

function showOnDisplay() {
    document.getElementById("display").value = currentNumber;
}
function clearDisplay() {
    document.getElementById("display").value="";
    previousNumber = '';
    currentNumber = '';
    operator = null;
}