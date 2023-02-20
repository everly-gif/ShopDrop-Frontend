import { getLocaleExtraDayPeriods } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{


  orders:any = [];
 
  products : any = [];
  productids : any = [];
 
  
  constructor (private payment : PaymentService ,private product : ProductService){}
  ngOnInit(){
    if(!localStorage.getItem('user_id')){location.href="/"}
    this.payment.getOrders(localStorage.getItem('user_id')).subscribe((response:any)=>{
      if(response.length != 0){
        this.orders = response;
        console.log("ord",this.orders);
      
        // for(let i= 0 ; i < this.orders.length ; i++){
        //   for(let j = 0 ; j < this.orders[i].order_details.length;j++){
        //    this.product.getProduct(this.orders[i].order_details[j].product_id).subscribe((response)=>{
        //     this.products.push(response);
        //     console.log(this.products);
        //    })
         
        //   }
        // } 
    
      }

      });

   
      
  
}






}






