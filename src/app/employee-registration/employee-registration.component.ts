import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent {

name:string='';
role:string="";

employees:any = [];
// regis(){
//   this.employees.push({name:this.name,role:this.role});
// }


regis(){

  let employee = {
    name: this.name,
    role: this.role
  }

  this.employees.push(employee);
}

}
