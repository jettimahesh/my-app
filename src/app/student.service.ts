import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getStudentData():Observable<any>{
   return this.http.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student")
  }

postStudentData(data:any):Observable<any>{
  return this.http.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student", data)
}

}
