import { Component } from '@angular/core';
import { EcartService } from '../ecart.service';

@Component({
  selector: 'app-ecart',
  templateUrl: './ecart.component.html',
  styleUrls: ['./ecart.component.css']
})
export class EcartComponent {


  ecarts:any=[];

constructor(private eCart:EcartService){
  eCart.getEcart().subscribe(
    (data:any)=>{
      this.ecarts=data;
    },
    (err:any)=>{
      alert("internal error")
    }
  )
}


}
