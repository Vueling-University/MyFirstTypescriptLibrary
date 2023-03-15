export class Calculator {
  public addNumbers(firstNumber: number, secondNumber: number) {
    return firstNumber + secondNumber;
  }
  public substractNumbers(firstNumber: number, secondNumber: number) {
    return firstNumber - secondNumber;
  }
  public multiplyNumbers(firstNumber: number, secondNumber: number) {
    return firstNumber * secondNumber;
  }
  public divideNumbers(firstNumber: number, secondNumber: number) {
    if (secondNumber != 0) {
      return firstNumber / secondNumber;
    } else {
      return 'You can not divide with 0... Try to type another one.';
    }
  }
}
