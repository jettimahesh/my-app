import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginsService } from '../logins.service';
import { Router } from '@angular/router';

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
constructor(private loginservice:LoginsService, private routerlink:Router){}
login(){
  console.log(this.loginFrom);
  this.loginservice.login(this.loginFrom.value).subscribe(
    (data:any)=>{
      alert("login successfull")

      //navigate to login
      this.routerlink.navigateByUrl("/dashboard")

      // store token
      sessionStorage.setItem('token', data.token)
    },
    (err:any)=>{
      alert("login failed")
    }
  )
}
}
