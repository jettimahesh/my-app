import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-regis',
  templateUrl: './user-regis.component.html',
  styleUrls: ['./user-regis.component.css']
})
export class UserRegisComponent {


public userForm:FormGroup = new FormGroup({
  name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(17)]),
  age:new FormControl('', [Validators.required, Validators.min(18), Validators.max(60)]),
  email:new FormControl('', [Validators.required, Validators.email]),
  phone:new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
  address:new FormGroup({
    city:new FormControl(),
    pin:new FormControl()
  }),
  type:new FormControl(),
  // busfee:new FormControl(),
  // hostelfee:new FormControl()
  cards: new FormArray([])
})

get cardsArrayForm(){
  return this.userForm.get('cards') as FormArray;
}

addCard(){
  this.cardsArrayForm.push(
    new FormGroup({
      number: new FormControl(),
      expiry: new FormControl(),
      cvv:new FormControl(),
    })
  )
}

deletCard(i:number){
  this.cardsArrayForm.removeAt(i);
}

constructor(){

  this.userForm.get("type")?.valueChanges.subscribe(
    (data:any)=>{

      if(data == 'dayScholor'){
        this.userForm.addControl('busFee', new FormControl());
        this.userForm.removeControl('hostelfee');
      }
      else{
        this.userForm.addControl('hostelfee', new FormControl());
        this.userForm.removeControl('busFee')
      }
    }
  )
}

submit(){
  console.log(this.userForm.value);
}

}
