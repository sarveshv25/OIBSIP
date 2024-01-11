let displayValue = '';

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function appendSymbol(symbol) {
    displayValue += symbol;
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}
