let currentDisplay = '';

const Calc = document.getElementById('display')
Calc.value = currentDisplay;

function appendValue(value) {
    currentDisplay += value;
    Calc.value = currentDisplay;
}

function clearDisplay() {
    currentDisplay = '';
    Calc.value = currentDisplay;
}

function calculate() {
    currentDisplay = eval(currentDisplay);
    Calc.value = currentDisplay;
}