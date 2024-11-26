import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImbdService {

  constructor(private httpClient:HttpClient) { }

  getImbd():Observable<any>{
    return this.httpClient.get("https://dummyapi.online/api/movies")
  }
}
