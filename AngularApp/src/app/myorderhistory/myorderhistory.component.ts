import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-myorderhistory',
  templateUrl: './myorderhistory.component.html',
  styleUrls: ['./myorderhistory.component.css']
})
export class MyorderhistoryComponent implements OnInit {

  orders = [];//Declare array to store values

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getListOfOrder()
      .subscribe(data => {

        this.orders = data;
        console.log(this.orders);

      });
  }

  //set default
  key1: string = 'date';
  reverse: boolean = false;
  sort(key1) {

    this.key1;
    this.reverse = !this.reverse;

  }
  p: number = 1;

}



