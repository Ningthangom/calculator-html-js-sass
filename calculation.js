

export const calculation = (firstNumber, secondNumber, operation) => {
    if (operation == "+") {
        return firstNumber + secondNumber;
    } else if (operation == "-") {
        return firstNumber - secondNumber;
    } else if (operation == "÷") {
        return firstNumber / secondNumber;
    } else if (operation == "x") {
        return firstNumber * secondNumber;
    } else if (operation == "%") {
        return firstNumber * secondNumber;
    }
}
