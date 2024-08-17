function square(value) {
    var inputField = document.getElementById("display")
    inputField.value = value * value


}
function clearInput() {
    var inputField = document.getElementById("display")
    inputField.value = " "
    // console.log(inputField);
}

function appendToDisplay(value) {
    var inputField = document.getElementById('display');
    var currentValue = inputField.value;

    var lastChar = currentValue.charAt(currentValue.length - 1);

    if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
        if (value === '+' || value === '-' || value === '*' || value === '/') {
            inputField.value = currentValue.slice(0, -1) + value;
        } else {
            inputField.value += value;
        }
    } else {
        inputField.value += value;
    }
}
function clearing() {
    var inputField = document.getElementById("display")
    var less = inputField.value.slice(0, -1)
    inputField.value = less
}
function calculateResult() {
    var inputField = document.getElementById("display")
    var result = eval(inputField.value)
    inputField.value = result
}