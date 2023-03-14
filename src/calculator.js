"use strict";
exports.__esModule = true;
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.addNumbers = function (firstNumber, secondNumber) {
        console.log("".concat(firstNumber + secondNumber)); // tslint:disable-next-line:no-console
    };
    Calculator.prototype.substractNumbers = function (firstNumber, secondNumber) {
        console.log("".concat(firstNumber - secondNumber)); // tslint:disable-next-line:no-console
    };
    Calculator.prototype.multiplyNumbers = function (firstNumber, secondNumber) {
        console.log("".concat(firstNumber * secondNumber)); // tslint:disable-next-line:no-console
    };
    Calculator.prototype.divideNumbers = function (firstNumber, secondNumber) {
        if (secondNumber !== 0) {
            console.log("".concat(firstNumber / secondNumber)); // tslint:disable-next-line:no-console
        }
        else {
            console.log('You can not divide with 0... Try to type another one.');
        }
    };
    return Calculator;
}());
exports.Calculator = Calculator;
