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

