import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  nifty = [];
  banknifty = [];

  constructor(private stockService: StockService) { }

  ngOnInit() {

    this.stockService.getNifty()
      .subscribe(data => {

        this.nifty = data;
        console.log(this.nifty);

      });

    this.stockService.getBankNifty()
      .subscribe(data => {

        this.banknifty = data;
        console.log(this.banknifty);

      });

  }

  key1: string = 'symbol';
  reverse: boolean = false;

  sort(key1) {

    this.key1;
    this.reverse = !this.reverse;

  }
  p: number = 1;

}
