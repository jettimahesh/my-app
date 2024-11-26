import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-id',
  templateUrl: './student-id.component.html',
  styleUrls: ['./student-id.component.css']
})
export class StudentIdComponent {


  constructor(private studentId: StudentService) { }

  public studentForm: FormGroup = new FormGroup(
    {
      name: new FormControl(),
      phone: new FormControl(),
      city: new FormControl(),
      dob: new FormControl(),
      profile_picture: new FormControl(),
      email: new FormControl(),
      school_logo: new FormControl(),
      school_name: new FormControl(),
      school_city: new FormControl(),
      school_pin: new FormControl()
    }
  );

  submit(){
    this.studentId.postStudentData(this.studentForm.value).subscribe(
      (data:any)=>{
        alert("created successfully")
      },
      (error:any)=>{
        alert("error")
      }
    )
  }

}
//   {
//     name: new FormControl(),
//     phone: new FormControl(),
//     city: new FormControl(),
//     dob: new FormControl(),
//     profile_picture: new FormControl(),
//     email: new FormControl(),
//     school_logo: new FormControl(),
//     school_name: new FormControl(),
//     school_city: new FormControl(),
//     school_pin: new FormControl(),
// },