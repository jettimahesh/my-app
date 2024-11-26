import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicsService {

  constructor( private httpClient:HttpClient) { }

  getPics():Observable<any>{
    return this.httpClient.get("https://picsum.photos/v2/list?page=1&limit=100")
  }
}
