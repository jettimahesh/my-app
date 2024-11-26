import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient:HttpClient) { }

  emailData():Observable<any>{
    return this.httpClient.get("https://jsonplaceholder.typicode.com/todos")
  }
}
