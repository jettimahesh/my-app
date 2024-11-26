import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor(private http:HttpClient) { }

  getSocial():Observable<any>{
   return this.http.get("https://dummyapi.online/api/social-profiles")
  }
}
