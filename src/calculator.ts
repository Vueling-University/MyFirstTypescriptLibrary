export class Calculator {
    public addNumbers(firstNumber: number, secondNumber: number): void {
        console.log(`${firstNumber + secondNumber}`); // tslint:disable-next-line:no-console
    }
    public substractNumbers(firstNumber: number, secondNumber: number): void {
        console.log(`${firstNumber - secondNumber}`); // tslint:disable-next-line:no-console
    }
    public multiplyNumbers(firstNumber: number, secondNumber: number): void {
        console.log(`${firstNumber * secondNumber}`); // tslint:disable-next-line:no-console
    }
    public divideNumbers(firstNumber: number, secondNumber: number): void {
        if (secondNumber !== 0) {
            console.log(`${firstNumber / secondNumber}`); // tslint:disable-next-line:no-console
        } else {
            console.log('You can not divide with 0... Try to type another one.');
        }
    }
}