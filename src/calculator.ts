export class Calculator {
  errorMessage : string = "You can not divide with 0... Try to type another one.";
  public addNumbers(firstNumber: number, secondNumber: number): void {
    // firstNumber + secondNumber;
    // tslint:disable-next-line:no-console
    console.log(`${firstNumber + secondNumber}`);
  }
  public substractNumbers(firstNumber: number, secondNumber: number): void {
    // firstNumber - secondNumber;
    // tslint:disable-next-line:no-console
    console.log(`${firstNumber - secondNumber}`);
  }
  public multiplyNumbers(firstNumber: number, secondNumber: number): void {
    // firstNumber * secondNumber;
    // tslint:disable-next-line:no-console
    console.log(`${firstNumber * secondNumber}`);
  }
  public divideNumbers(firstNumber: number, secondNumber: number): void {
    if (secondNumber !== 0) {
      // firstNumber / secondNumber;
      // tslint:disable-next-line:no-console
      console.log(`${firstNumber / secondNumber}`);
    } else {
      // tslint:disable-next-line:no-console
      console.log(this.errorMessage);
    }
  }
}
