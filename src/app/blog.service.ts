import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient:HttpClient) { }

  getBlog():Observable<any>{
   return this.httpClient.get("https://dummyapi.online/api/blogposts")
  }
}
