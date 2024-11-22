import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  num1: number = 0;
  num2: number = 0;


  result: any = 0;

  add() {
    this.result = this.num1 + this.num2;
  }
  sub() {
    this.result = this.num1 - this.num2;
  }
  mul() {
    this.result = this.num1 * this.num2;
  }
  div() {
    if (this.num2 != 0) {
      this.result = this.num1 / this.num2;
    } else {
      this.result = 0;
    }
  }
}
