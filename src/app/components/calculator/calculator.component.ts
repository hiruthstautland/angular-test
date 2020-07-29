import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  currentNumber: string = '0';
  firstOperand: any = null;
  operator: any = null;
  waitForSecondNumber: boolean = false;

  public getNumber(pressed: string) {
    if (this.waitForSecondNumber) {
      this.currentNumber = pressed;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === '0'
        ? (this.currentNumber = pressed)
        : (this.currentNumber += pressed);
    }
  }
  getDecimal() {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }
  private doCalculation(operation, secondOperation) {
    switch (operation) {
      case '+':
        return (this.firstOperand += secondOperation);
        break;
      case '-':
        return (this.firstOperand -= secondOperation);
        break;
      case '*':
        return (this.firstOperand *= secondOperation);
        break;
      case '/':
        return (this.firstOperand /= secondOperation);
        break;
      case '=':
        return secondOperation;
        break;
      default:
        return secondOperation;
    }
  }
  public getOperation(op: string) {
    if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber);
    } else if (this.operator) {
      const result = this.doCalculation(
        this.operator,
        Number(this.currentNumber)
      );
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;
  }
  public clear() {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }
  constructor() {}

  ngOnInit(): void {}
}
