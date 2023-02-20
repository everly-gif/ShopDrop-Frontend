import { compileDeclareFactoryFunction } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler, window } from 'rxjs';
import { PaymentService } from 'src/app/services/payment.service';
import { ProductService } from 'src/app/services/product.service';

declare var Razorpay :any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  cart : any = [];
  total : number =0;
  user_id : any = localStorage.getItem('user_id');

 
  constructor(private product : ProductService, private payment : PaymentService){}

  ngOnInit() {

    this.product.getCart(this.user_id).subscribe((response:any)=>{
      this.cart = response;
      for(let i = 0; i < this.cart.length; i++){
        this.total+= Number(this.cart[i].pivot.amount);
      }
      console.log(response);
    })

      

   
  }

  updateCart(index : number , sign : string){
   if(sign === "plus"){
    this.cart[index].pivot.quantity+=1;
    this.cart[index].pivot.amount = this.cart[index].pivot.quantity * this.cart[index].price ;
    this.total += this.cart[index].price;
   }
   else {
    this.cart[index].pivot.quantity-=1;
    this.cart[index].pivot.amount = this.cart[index].pivot.quantity * this.cart[index].price ;
    this.total -= this.cart[index].price;
   }
   

   if(this.cart[index].pivot.quantity >= 1 ){
   let data  = {
    "quantity" : this.cart[index].pivot.quantity,
    "amount" : this.cart[index].pivot.quantity * this.cart[index].price
   }
   this.product.updateCart(data, this.cart[index].pivot.id).subscribe((response)=>{
    console.log(response);
   })
  }
  else{
    this.product.removeCart(this.user_id, this.cart[index].pivot.product_id).subscribe((response:any)=>{
      this.cart = response.cart;
    })
  }
}




  pay(cart:any,total:number){
  var payment_id= '';
  console.log({
    "cart":cart,
    total : total
  })
  let  options :any = {
    "key": "rzp_test_TqxwRj5kY75knS", // Enter the Key ID generated from the Dashboard
    "amount": '', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "ShopDrop",
    "description": "Shopping Made Easy",
     //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": 
      function (response:any){
        if (response.razorpay_payment_id) {
          $.ajax({
                   url:"http://localhost:8000/api/order",
                   cache: false,
                   type: "POST",
                   data: {
                          cart : cart,
                          total : total,
                          pay_id: response.razorpay_payment_id,
                          user_id : localStorage.getItem('user_id')
                  },
                  success: function(response) { 
                     console.log('success');
                     for(var i= 0; i < cart.length ; i++){
                     insertIntoCart(cart[i],response.order_id);
                     }
                    
                 }
              });
              
  }
    },
    "prefill": {
      "name": localStorage.getItem('username'),
      "email": localStorage.getItem('useremail'),
      "contact": localStorage.getItem('user_contact')
  },
  "payment_id" : ''
  }
  options.amount = total*100;
  var rzpr = new Razorpay(options);
  rzpr.open();
 
  }

 
}

function insertIntoCart(cart: any, order_id: any) {
  cart.order_id = order_id;

  $.ajax({
    url:"http://localhost:8000/api/order-details",
    cache: false,
    type: "POST",
    data: {
           "cart" : cart,
   },
   success: function(response) { 
      console.log('success');
      clearCart(localStorage.getItem('user_id'));
     
  }

});

}

function clearCart(user_id:any){
  $.ajax({
    url:`http://localhost:8000/api/clear-cart/${user_id}`,
    cache: false,
    type: "DELETE",
    data: {},
   success: function(response) { 
      console.log('success');
      location.pathname = '';
  }

});
}

