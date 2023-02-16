import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  public getProducts(){
    return this.http.get('http://localhost:8000/api/products');
  }

  public getProduct(id : number){
    return this.http.get(`http://localhost:8000/api/products/${id}`);
  }
}
