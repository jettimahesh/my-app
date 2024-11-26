import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcartService {

  constructor(private httpClient:HttpClient) { }
  getEcart():Observable<any>{
    return this.httpClient.get("https://fakestoreapi.com/products");
  }
}
