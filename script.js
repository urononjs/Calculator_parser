calculatorParser = new CalculatorParser();

function startCalculate() {
    let expressionFromField = document.getElementById("calculatorField").value;
    expressionFromField = expressionFromField.replace(/\s/g, "");

    let regexp = (/[0-9][-+][0-9]/);

    if(expressionFromField.match(regexp)) {
        document.getElementById("calculationResult").innerHTML = calculatorParser.calculate(expressionFromField);
    } else {
        document.getElementById("calculationResult").innerHTML = "Incorrect data! Try again";
    }
}
