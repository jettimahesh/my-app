import { Component } from '@angular/core';
import { PokemanService } from '../pokeman.service';

@Component({
  selector: 'app-pokeman',
  templateUrl: './pokeman.component.html',
  styleUrls: ['./pokeman.component.css']
})
export class PokemanComponent {

  pokemans:any=[];

  constructor(private pokemanData:PokemanService){
    pokemanData.getPokeman().subscribe(
      (data:any)=>{
        this.pokemans=data;
      },
      (error:any)=>{
        alert("internal error")
      }
    )
  }
}
