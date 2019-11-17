import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

constructor(private http: HttpClient) { }
//URL's that take data from nodejs and expressjs

orderListUrl: string = 'http://localhost:8081/orderList';

recentOrderListUrl: string = 'http://localhost:8081/recentOrderList';

baseUrl: string = 'http://localhost:8081/';

//To get recent orders list

getRecentListOfOrder() {

  return this.http.get<any>(this.recentOrderListUrl); //returns recent orders
  
  }
//To get a list of all orders

getListOfOrder() {

return this.http.get<any>(this.orderListUrl); //returns all the orders

}

//To insert order

addOrder(orderRecord) {

return this.http.get<any>(this.baseUrl + "addOrder/" + JSON.stringify(orderRecord));

}

}