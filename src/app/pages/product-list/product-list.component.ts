import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  
  products : any = [];
  cart : any =[];
  user_id : any = localStorage.getItem('user_id');
  constructor (private product : ProductService){}

  ngOnInit() {
  
  if(this.user_id!==null){
    this.product.getProducts(this.user_id).subscribe((response:any)=>{
      this.products = response.products;
      this.cart = response.cart;
     
    })
  }
  else{
    this.product.getAllProducts().subscribe((response:any)=>{
      this.products = response;
      
    })
  }
  
 
  
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
