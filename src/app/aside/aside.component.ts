import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent  implements OnInit  {
  //variables declared to get date 
  today = new Date();
  
  //JSON object order template declared 
  orderRecord = {
    "symbol": "",
    "quantity": 42,
    "price": 36,
    "type": "",
    "date": this.today
  };

  constructor(private orderService: OrderService) { }

  ngOnInit() {

  }

  //Function for inserting order received on click
  add() {
    //Check for empty field values in the order form
    if (this.orderRecord.price == null || this.orderRecord.quantity == null|| this.orderRecord.type == "" || this.orderRecord.symbol == "") {
      // console.log("Empty");
      // console.log(this.orderRecord);
      alert("Fill out all the fields"); //Order discarded
    }
    else {

      this.orderRecord.symbol = this.orderRecord.symbol.toUpperCase(); //Convert the entered stock's name to upper case
      this.orderService.addOrder(this.orderRecord)
        .subscribe(data => {
          // console.log(data);
          // console.log(this.today);
          alert("Order Sent"); //Order inserted
          
        })
    }

  }
}