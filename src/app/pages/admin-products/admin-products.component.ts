import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit{

constructor(private admin : ProductService){}

products : any = [];

ngOnInit(){
  this.admin.getAdminView().subscribe((response)=>{
    this.products=response;
    console.log(response);
  })
}
delete(item:any){
  this.admin.deleteProduct(item.id).subscribe((response)=>{
    console.log(response);
  })
}

}
