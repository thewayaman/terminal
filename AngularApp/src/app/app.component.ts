import { Component } from '@angular/core';
import {StockService} from './stock.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Terminal';
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
 {headerName: 'ID', field: 'make' },
 {headerName: 'Symbol', field: 'model' },
 {headerName: 'Series', field: 'price'}
];
rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Porsche', model: 'Boxter', price: 72000 }
];

}
