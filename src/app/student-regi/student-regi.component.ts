import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-regi',
  templateUrl: './student-regi.component.html',
  styleUrls: ['./student-regi.component.css']
})
export class StudentRegiComponent {

public newstudent:FormGroup= new FormGroup(
  {
    name:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(18)]),
    class:new FormControl('',[Validators.required, Validators.min(6), Validators.max(9)]),
    fatherName:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(18)]),
    email:new FormControl('',[Validators.required , Validators.email]),
    dob:new FormControl(),
    address: new FormGroup({
      city:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(18)]),
      state:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(18)]),
      pincode:new FormControl()
    }),
    type:new FormControl(),
    marks: new FormArray([])
  }
)

get marksarray(){
  return this.newstudent.get('marks') as FormArray;
}

addclass(){
  this.marksarray.push(
    new FormGroup({
      class:new FormControl(),
      year:new FormControl(),
      percentage:new FormControl()

    })
  )
}
delete(i:number){
  this.marksarray.removeAt(i);
}

constructor(){
  this.newstudent.get('type')?.valueChanges.subscribe(
    (data:any)=>{
      if(data=='dayScholor'){
        this.newstudent.addControl('busfee', new FormControl());
        this.newstudent.removeControl('hostelfee');
      } else{
        this.newstudent.addControl('hostelfee', new FormControl());
        this.newstudent.removeControl('busfee');
      }
    }
  )
}



submit(){
  console.log(this.newstudent.value);
}
}


// {
//   name: 'John',
//   class: 7,
//   fatherName: ‘David Shaw’,
//   email: 'john@gmail.com',
//   dob: ‘10-10-2010’,
//   address: {
//     addressLine: '2-203, Moris street',
//     city: 'Dallas',
//     state: 'Texas',
//     pincode: 'TX-393823',
//   },
//   marks: [
//     {class:6,year: 2012, percentage: 94},
//     {class:5,year: 2011, percentage: 92},
//     {class:4,year: 2009, percentage: 84},
//     {class:3,year: 2008, percentage: 90},
//   ],
//   type: 'dayScholor/residential’
// }