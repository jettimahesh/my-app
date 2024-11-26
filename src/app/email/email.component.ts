import { Component } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
email:any=[];

  constructor(private eMail:EmailService){
    this.eMail.emailData().subscribe(
      (data:any)=>{
        this.email=data;
      },
      (err:any)=>{
        alert("internal error")
      }
    )
  }

}
