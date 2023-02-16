import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  
  products : any = [];
  constructor (private product : ProductService){}

  ngOnInit() {
      
    this.product.getProducts().subscribe((response)=>{
      this.products = response;
    })

  }

}
