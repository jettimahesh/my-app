import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {

  accounts: any = [];
  term: string = "";

  column: string = "";
  order: string = "";

  limit: number = 0;
  page: number = 0;

  constructor(private accountService: AccountsService) {
    accountService.getAccounts().subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (err: any) => {
        alert("internal Server error")
      }
    )
  }
 filter(){
  this.accountService.getfilter(this.term).subscribe(
    (data:any)=>{
      this.accounts=data;
    },
    (err:any)=>{
      alert("internal Server error")
    }
  )
 }

sort(){
  this.accountService.getsort(this.column, this.order).subscribe(
    (data:any)=>{
      this.accounts = data;
      console.log(data)
    },
    (err:any)=>{
      alert("internal Server error")
    }
  )
}

delete(id:string){
  this.accountService.getdelete(id).subscribe(
    (data:any)=>{
      alert("DELETED")
      location.reload()
    },
    (err:any)=>{
      alert("internal Server error")
    }
  )
}

}
