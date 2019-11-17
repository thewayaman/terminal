import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-markethistory',
  templateUrl: './markethistory.component.html',
  styleUrls: ['./markethistory.component.css']
})
export class MarkethistoryComponent implements OnInit {

  stocks = []; //Declare array to store stock data collections received
  constructor(private stockService: StockService) { }
  ngOnInit() {

    //Gets stock data

    this.stockService.getStocks()
      .subscribe(data => {

        this.stocks = data;
        console.log(this.stocks);

      });
  }

  //set default
  key1: string = 'SYMBOL';

  //Declare boolean 
  reverse: boolean = false;
  sort(key1) {

    this.key1;
    this.reverse = !this.reverse;

  }
  p: number = 1;
}
