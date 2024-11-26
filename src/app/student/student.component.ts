import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
studentsData:any=[];

constructor(private students:StudentService){

  students.getStudentData().subscribe(
    (data:any)=>{
      this.studentsData=data;
    },
    (err:any)=>{
      alert("error")
    }
  )
}

}




// {
// "name": "srikanth somidi",
// "phone": 79925356,
// "city": "hyd",
// "dob": 135897,
// "profile_picture": "https://c8.alamy.com/comp/EN9GYG/1-indian-kids-boy-school-student-EN9GYG.jpg",
// "email": "srikanthcherry4@gmail.com",
// "school_logo": "https://th.bing.com/th?id=OIP.we8tDTEyLC7CTjcSJAqIXgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
// "school_name": "montessory high school",
// "school_city": "kphb",
// "school_pin": 500030,
// "id": "87"
// }
