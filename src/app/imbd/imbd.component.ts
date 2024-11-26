import { Component } from '@angular/core';
import { ImbdService } from '../imbd.service';

@Component({
  selector: 'app-imbd',
  templateUrl: './imbd.component.html',
  styleUrls: ['./imbd.component.css']
})
export class ImbdComponent {

imbdr:any=[];

constructor(private imbd:ImbdService){

  imbd.getImbd().subscribe(
    (data:any)=>{
      this.imbdr=data;
    },
    (err:any)=>{
      alert("internal error")
    }
  )
}
getImbd(rating:any){
  return(Math.floor(rating))
}

}
