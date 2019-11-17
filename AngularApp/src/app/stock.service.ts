import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StockService {
  
  constructor(private http:HttpClient) { }
  baseUrl:string='http://localhost:8081/stock';
  baseUrl1:string='http://localhost:8081/nifty';
  baseUrl2:string='http://localhost:8081/banknifty';

  getStocks(){
    return this.http.get<any>(this.baseUrl);
  }

  getNifty(){
    console.log("test");
    return this.http.get<any>(this.baseUrl1);
    
  }

  getBankNifty(){
    console.log("test2");
    return this.http.get<any>(this.baseUrl2);
  }
  

}
