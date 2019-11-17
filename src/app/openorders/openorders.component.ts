import { Component, OnInit } from '@angular/core';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-openorders',
  templateUrl: './openorders.component.html',
  styleUrls: ['./openorders.component.css']
})
export class OpenordersComponent implements OnInit {


orders=[];

constructor(private orderService:OrderService) { }

ngOnInit() {
  this.orderService.getRecentListOfOrder()
  .subscribe(data=>{
    
    this.orders=data;
    console.log(this.orders);
 
  });
}


 //set default
key1:string='symbol';
reverse:boolean=false;
sort(key1)
{

this.key1;
this.reverse=!this.reverse;
}
p:number=1;
}