// Basic setup for the Math App

let history = [];

// Get valid number from input
function getValidNumber(id) {
    const value = parseFloat(document.getElementById(id).value);
    if (isNaN(value)) {
        alert('Please enter a valid number');
        return 0; // Default to 0 if invalid
    }
    return value;
}

// Math operations
function add() {
    const num1 = getValidNumber('num1');
    const num2 = getValidNumber('num2');
    const result = num1 + num2;
    console.log("Adding:", num1, "+", num2, "=", result); // Debug log
    displayResult(result);
}

function subtract() {
    const num1 = getValidNumber('num1');
    const num2 = getValidNumber('num2');
    const result = num1 - num2;
    displayResult(result);
}

function multiply() {
    const num1 = getValidNumber('num1');
    const num2 = getValidNumber('num2');
    const result = num1 * num2;
    displayResult(result);
}

function divide() {
    const num1 = getValidNumber('num1');
    const num2 = getValidNumber('num2');
    if (num2 !== 0) {
        const result = num1 / num2;
        displayResult(result);
    } else {
        displayResult('Error: Division by zero');
    }
}

function exponentiate() {
    const num1 = getValidNumber('num1');
    const num2 = getValidNumber('num2');
    const result = Math.pow(num1, num2);
    displayResult(result);
}

function squareRoot() {
    const num1 = getValidNumber('num1');
    const result = Math.sqrt(num1);
    displayResult(result);
}

function modulus() {
    const num1 = getValidNumber('num1');
    const num2 = getValidNumber('num2');
    const result = num1 % num2;
    displayResult(result);
}

// Display result and update history
function displayResult(result) {
    document.getElementById('result').innerText = 'Result: ' + result;
    history.push(result);
    updateHistory();
}

// Update history display
function updateHistory() {
    const historyDisplay = document.getElementById('history');
    historyDisplay.innerHTML = '<strong>History:</strong><br>' + history.join('<br>');
}

// Clear inputs and results
function clearInputs() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').innerText = '';
    history = [];
    updateHistory();
}

// Pin Pad Functions
function appendToInput(value) {
    const num1Input = document.getElementById('num1');
    num1Input.value += value;
}

function clearInput() {
    const num1Input = document.getElementById('num1');
    num1Input.value = '';
}
