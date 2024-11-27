import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginsService } from '../logins.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

public loginFrom:FormGroup = new FormGroup({
  email:new FormControl(),
  password:new FormControl(),
})
constructor(private loginservice:LoginsService){}
login(){
  console.log(this.loginFrom);
  this.loginservice.login(this.loginFrom.value).subscribe(
    (data:any)=>{
      alert("login successfull")
    },
    (err:any)=>{
      alert("login failed")
    }
  )
}
}
