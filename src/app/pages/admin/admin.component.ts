import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  products:any ;
  cloth : any;
  electronics:any;
  constructor (private product : ProductService){
   
  }
  
  ngOnInit(){
    
    if(localStorage.getItem('role')==='user' || !localStorage.getItem('role')){location.href = '/';}
    this.products = this.getproducts();
 
  }
  getproducts(){
    this.product.getproductsadmin().subscribe((response:any)=>{
      console.log(response);
      console.log(localStorage.getItem('role'));
      this.products = response;
    })
  }
  update(id:number,data:any, updateForm :any){
    this.product.updateProduct(id,data).subscribe((response:any)=>{
        console.log(response);
        this.products = this.getproducts();
    })
    updateForm.reset();
  }
  addproduct(data:any, addForm :any){
    console.log(data);
    this.product.addProduct(data).subscribe((response:any)=>{
      this.products = this.getproducts();
    })
    addForm.reset();
    
  }

  
}
