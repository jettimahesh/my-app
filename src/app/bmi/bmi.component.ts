import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {

  height: number = 0;
  weight: number = 0;
  result: number = 0;
  condition: string = 'condition';
  color: string = 'gray';


  // var bmi = weight / ((height / 100) * (height / 100))

  cal() {

    if (this.height <= 0 || this.weight <= 0) {
      this.result = 0;
      this.condition = 'Please enter valid height and weight';
      this.color = 'gray';
      return;
    }

    this.result = this.weight / ((this.height / 100) * (this.height / 100))

    this.result = parseFloat(this.result.toFixed(2));

    if (this.result > 34.9) {
      this.condition = 'Obese';
      this.color = 'red'
    } else if (this.result > 29.9) {
      this.condition = 'Obesity';
      this.color = 'orange';
    } else if (this.result > 24.9) {
      this.condition = 'Overweight'
      this.color = 'yellow';
    } else if (this.result > 18.5) {
      this.condition = 'Normal Weight';
      this.color = 'green';
    } else {
      this.condition = 'Underweight';
      this.color = 'blue';
    }

  }

  // getColor(): string {
  //   if (this.result > 34.9) {
  //     return 'red';
  //   } else if (this.result > 29.9) {
  //     return 'orange';
  //   } else if (this.result > 24.9) {
  //     return 'yellow';
  //   } else if (this.result > 18.5) {
  //     return 'green';
  //   } else {
  //     return 'blue';
  //   }
  // }
}
