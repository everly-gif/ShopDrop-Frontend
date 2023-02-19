import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  public getProducts(id :number){
    return this.http.get(`http://localhost:8000/api/productswithcart/1`);
  }

  public getProduct(id : number){
    return this.http.get(`http://localhost:8000/api/products/${id}`);
  }

  public addToCart(data:any){
    return this.http.post(`http://localhost:8000/api/cart`,data);
  }
  
  public getCart(id : number){
    return this.http.get(`http://localhost:8000/api/cart/${id}`);
  }

  public removeCart(userid : number, productid : number){
    return this.http.delete(`http://localhost:8000/api/delete-from-cart/${userid}/${productid}`);
  }
  public updateCart(data : any, id : number){
    return this.http.put(`http://localhost:8000/api/cart/${id}`,data);
  }
}
