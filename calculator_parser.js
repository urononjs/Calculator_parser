class CalculatorParser {

    constructor() {
        console.log("hello from constructor")
    }

    calculate(expression) {
        let arrayOfTwoNumbers;

        if (expression.split("+").length > 1) {
            arrayOfTwoNumbers = expression.split("+");

            return this.sum(arrayOfTwoNumbers);
        } else if (expression.split("-").length > 1) {
            arrayOfTwoNumbers = expression.split("-");
            return this.subtract(arrayOfTwoNumbers);
        }


    }

    sum(arrayOfTwoNumbers) {
        let result = 0;
        let arrayOfTwoNumbersLength = arrayOfTwoNumbers.length;
        for (let i = 0; i < arrayOfTwoNumbersLength; i++) {
            let number = arrayOfTwoNumbers[i];
            result += parseInt(number);
        }

        return result;
    }