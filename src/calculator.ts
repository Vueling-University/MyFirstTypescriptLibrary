export class Calculator {
    public addNumbers(firstNumber: number, secondNumber: number): void {
        // tslint:disable-next-line:no-console
        console.log(`${firstNumber + secondNumber}`);
    }
    public substractNumbers(firstNumber: number, secondNumber: number): void {
        // tslint:disable-next-line:no-console
        console.log(`${firstNumber - secondNumber}`);
    }
    public multiplyNumbers(firstNumber: number, secondNumber: number): void {
        // tslint:disable-next-line:no-console
        console.log(`${firstNumber * secondNumber}`);
    }
    public divideNumbers(firstNumber: number, secondNumber: number): void {
        if (secondNumber !== 0) {
            // tslint:disable-next-line:no-console
            console.log(`${firstNumber / secondNumber}`); 
        } else {
            console.log('You can not divide with 0... Try to type another one.');
        }
    }
}