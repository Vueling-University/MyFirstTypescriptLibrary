import { Calculator } from './calculator';
const calculator = new Calculator();

// tslint:disable no-var-requires
const input = require('prompt-sync')();
let userOption: number;
let finished: boolean = false;
let firstNumber: number;
let secondNumber: number;

do {
  // tslint:disable-next-line:no-console
  console.log('Hello there! You are using my own calculator library.');
  // tslint:disable-next-line:no-console
  console.log('Choose which operation do you want to do:');
  // tslint:disable-next-line:no-console
  console.log('1. Adding numbers.');
  // tslint:disable-next-line:no-console
  console.log('2. Substract numbers.');
  // tslint:disable-next-line:no-console
  console.log('3. Multiply numbers.');
  // tslint:disable-next-line:no-console
  console.log('4. Divide numbers.');
  // tslint:disable-next-line:no-console
  console.log('0. Exit');

  userOption = input();
  switch (Number(userOption)) {
    case 1:
      // tslint:disable-next-line:no-console
      console.log('Introduce both numbers:');
      firstNumber = input();
      secondNumber = input();
      calculator.addNumbers(Number(firstNumber), Number(secondNumber));
      break;

    case 2:
      // tslint:disable-next-line:no-console
      console.log('Introduce both numbers:');
      firstNumber = input();
      secondNumber = input();
      calculator.substractNumbers(Number(firstNumber), Number(secondNumber));
      break;

    case 3:
      // tslint:disable-next-line:no-console
      console.log('Introduce both numbers:');
      firstNumber = input();
      secondNumber = input();
      calculator.multiplyNumbers(Number(firstNumber), Number(secondNumber));
      break;

    case 4:
      // tslint:disable-next-line:no-console
      console.log('Introduce both numbers:');
      firstNumber = input();
      secondNumber = input();
      calculator.divideNumbers(Number(firstNumber), Number(secondNumber));
      break;

    case 0:
      // tslint:disable-next-line:no-console
      console.log('Introduce both numbers:');
      // tslint:disable-next-line:no-console
      console.log('See you soon!');
      finished = true;
      break;

    default:
      // tslint:disable-next-line:no-console
      console.log('We are having some technical issues. Hold on...');
      finished = true;
      break;
  }
} while (!finished);
