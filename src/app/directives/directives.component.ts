import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

age:number = 20;
ages:number[] = [10,12,20,25,26]

state:string = "telangana"
states:string[] = ["telangana", "andhra", "karnataka"];

products:any = [
  {name:'pen',price:20},
  {name:'book',price:60},
  {name:'bag',price:400},
  {name:'mobile',price:8000},
  {name:'laptop',price:35000}
]

today:any = new Date()
}
