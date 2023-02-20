import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
 products:any = [];
 id:any;
 cart : any =[];
 user_id : any = localStorage.getItem('user_id');
 constructor(private product : ProductService, private route : ActivatedRoute){}
 ngOnInit(){
   this.id = this.route.snapshot.paramMap.get('id');
   this.product.getProduct(this.id).subscribe((response)=>{
    this.products.push(response);
    console.log(response);
   });

   this.product.getProducts(this.user_id).subscribe((response:any)=>{
    this.cart = response.cart;
  })
 }
 checkInCart(product:any)
 {
   let item=this.cart.find((p:any)=>{
     return p.pivot.user_id==1 && p.pivot.product_id===product.id;
   })

   if(item===undefined)
   {
     return false;
   }

   return true;

 }

 addTocart(product :any){
  this.product.addToCart(
    {
      "user_id" : this.user_id,
      "product_id" : product.id,
      "amount" : product.price,
      "quantity" : 1
    }
  ).subscribe((response:any)=>{
   if(response.success === true){
    this.cart = response.cart;
   }
  });
}
}


