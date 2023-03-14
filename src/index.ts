import { Calculator } from "./calculator";
const calculator = new Calculator();

const input = require('prompt-sync')();
let userOption : number;
let finished : boolean = false;
let firstNumber : number;
let secondNumber : number;

do {
    console.log("Hello there! You are using my own calculator library.");
    console.log("Choose which operation do you want to do:");
    console.log("1. Adding numbers.");
    console.log("2. Substract numbers.");
    console.log("3. Multiply numbers.");
    console.log("4. Divide numbers.");
    console.log("0. Exit");

    userOption = input();
    switch (Number(userOption)) {
        case 1:
            console.log("Introduce both numbers:");
            firstNumber = input();
            secondNumber = input();
            calculator.addNumbers(Number(firstNumber), Number(secondNumber));
            break;
    
        case 2:
            console.log("Introduce both numbers:");
            firstNumber = input();
            secondNumber = input();
            calculator.substractNumbers(Number(firstNumber), Number(secondNumber));
            break;

        case 3:
            console.log("Introduce both numbers:");
            firstNumber = input();
            secondNumber = input();
            calculator.multiplyNumbers(Number(firstNumber), Number(secondNumber));
            break;

        case 4:
            console.log("Introduce both numbers:");
            firstNumber = input();
            secondNumber = input();
            calculator.divideNumbers(Number(firstNumber), Number(secondNumber));
            break;

        case 0:
            console.log("Introduce both numbers:");
            console.log("See you soon!");
            finished = true;
            break;

        default:
            console.log("We are having some technical issues. Hold on...");
            finished = true;
            break;
    }
} while (!finished);