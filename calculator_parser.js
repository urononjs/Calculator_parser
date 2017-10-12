class CalculatorParser {

    constructor() {
        console.log("hello from constructor")
    }

    calculate(expression) {
        let arrayOfTwoNumbers;

        if (expression.split("+").length > 1) {
            arrayOfTwoNumbers = expression.split("+");
            return this.sum(arrayOfTwoNumbers);
        }

        else if (expression.split("-").length > 1) {
            arrayOfTwoNumbers = expression.split("-");
            return this.subtract(arrayOfTwoNumbers);
        }

        else if (expression.split("*").length > 1) {
            arrayOfTwoNumbers = expression.split("*");
            return this.multiply(arrayOfTwoNumbers);
        }

        else if (expression.split("/").length > 1) {
            arrayOfTwoNumbers = expression.split("/");
            return this.to_divide(arrayOfTwoNumbers);
        }

    }


    sum(arrayOfTwoNumbers) {
        let result = 0;
        let arrayOfTwoNumbersLength = arrayOfTwoNumbers.length;
        for (let i = 0; i < arrayOfTwoNumbersLength; i++) {
            let number = arrayOfTwoNumbers[i];

            result += parseInt(number);
        }

        return ' Ваш результат = ' + result;
    }


    subtract(arrayOfTwoNumbers) {
        let result = 0;
        let arrayOfTwoNumbersLength = arrayOfTwoNumbers.length;
        for (let i = 0; i < arrayOfTwoNumbersLength; i++) {
            let number = arrayOfTwoNumbers[i];

            if (i === 0) {
                result = number;
                continue;
            }

            result -= parseInt(number);
        }
        return ' Ваш результат = ' + result;

    }


    multiply(arrayOfTwoNumbers) {
        let result = 0;
        let arrayOfTwoNumbersLength = arrayOfTwoNumbers.length;
        for (let i = 0; i < arrayOfTwoNumbersLength; i++) {
            let number = arrayOfTwoNumbers[i];

            if (i === 0) {
                result = number;
                continue;
            }


            result *= parseInt(number);
        }

        return ' Ваш результат = ' + result;
    }


    to_divide(arrayOfTwoNumbers) {
        let result = 0;
        let arrayOfTwoNumbersLength = arrayOfTwoNumbers.length;
        for (let i = 0; i < arrayOfTwoNumbersLength; i++) {
            let number = arrayOfTwoNumbers[i];

            if (i === 0) {
                result = number;
                continue;
            }

            result /= parseInt(number);
        }

        return ' Ваш результат = ' + result;
    }


}
