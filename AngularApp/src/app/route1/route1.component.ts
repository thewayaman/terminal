import { Component, OnInit } from '@angular/core';
import {StockService} from '../stock.service';

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.css']
})
export class Route1Component implements OnInit {
  
stocks1=[];
constructor(private stockService:StockService){}

ngOnInit(){
  this.stockService.getStocks()
  .subscribe(data=>{
    
    this.stocks1=data;
    console.log(this.stocks1);
    console.log("ola");
 
  });
}
columnDefs = [
 {headerName: 'ID', field: 'ID' },
 {headerName: 'Symbol', field: 'SYMBOL' },
 {headerName: 'Series', field: 'SERIES'}
];
rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Porsche', model: 'Boxter', price: 72000 }
];

}


