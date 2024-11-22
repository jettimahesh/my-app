import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  age:number = 22;
  isIndian:boolean =true;
  isInvalid:boolean = false;

  phone:string = "+91"
  num1:number= 0;
  num2:number= 0;
  results:number= 0;

  create(){
    alert("create successfully!!")
  }

  typing(){
    alert("typing")
  }

  sum(){
    this.results = this.num1 + this.num2;
  }

}
