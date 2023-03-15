"use strict";
exports.__esModule = true;
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.addNumbers = function (firstNumber, secondNumber) {
        firstNumber + secondNumber;
        // tslint:disable-next-line:no-console
        // console.log(`${firstNumber + secondNumber}`);
    };
    Calculator.prototype.substractNumbers = function (firstNumber, secondNumber) {
        firstNumber - secondNumber;
        // tslint:disable-next-line:no-console
        // console.log(`${firstNumber - secondNumber}`);
    };
    Calculator.prototype.multiplyNumbers = function (firstNumber, secondNumber) {
        firstNumber * secondNumber;
        // tslint:disable-next-line:no-console
        // console.log(`${firstNumber * secondNumber}`);
    };
    Calculator.prototype.divideNumbers = function (firstNumber, secondNumber) {
        if (secondNumber !== 0) {
            firstNumber / secondNumber;
            // tslint:disable-next-line:no-console
            // console.log(`${firstNumber / secondNumber}`);
        }
        else {
            // tslint:disable-next-line:no-console
            // console.log('');
            var errorMessage = "You can not divide with 0... Try to type another one.";
            errorMessage;
        }
    };
    return Calculator;
}());
exports.Calculator = Calculator;
