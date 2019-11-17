import { Component, OnInit } from '@angular/core';
import {StockService } from '../stock.service';

@Component({
  selector: 'app-colorpanel',
  templateUrl: './colorpanel.component.html',
  styleUrls: ['./colorpanel.component.css']
})
export class ColorpanelComponent implements OnInit {
  //Declare array to store daily data
  nifty=[]; 
  banknifty=[];
  constructor(private stockService:StockService) { }

  ngOnInit() {
    //Store data into array nifty[]
    this.stockService.getNifty()
    .subscribe(data=>{
      
      this.nifty=data;
      console.log(this.nifty);
   
    });
    //Store data into array banknifty
    this.stockService.getBankNifty()
    .subscribe(data=>{
      
      this.banknifty=data;
      console.log(this.banknifty);
   
    });
  }

}
