import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  token : any = localStorage.getItem('token');

  public getProducts(id :number){
    let headers={"Content-Type":"application/json","Accept":"application/json","Authorization": `Bearer ${this.token}`};
    return this.http.get(`http://localhost:8000/api/productswithcart/${id}`,{headers});
  }
  public getAllProducts(){
  
    return this.http.get(`http://localhost:8000/api/allproducts`);
  }

  public getProduct(id : number){
    let headers={"Content-Type":"application/json","Accept":"application/json","Authorization": `Bearer ${this.token}`};
    return this.http.get(`http://localhost:8000/api/products/${id}`,{headers});
  }

  public addToCart(data:any){
    let headers={"Content-Type":"application/json","Accept":"application/json","Authorization": `Bearer ${this.token}`};
    return this.http.post(`http://localhost:8000/api/cart`,data, {headers});
  }
  
  public getCart(id : number){
    let headers={"Content-Type":"application/json","Accept":"application/json","Authorization": `Bearer ${this.token}`};
    return this.http.get(`http://localhost:8000/api/cart/${id}`,{headers});
  }

  public removeCart(userid : number, productid : number){
    let headers={"Content-Type":"application/json","Accept":"application/json","Authorization": `Bearer ${this.token}`};
    return this.http.delete(`http://localhost:8000/api/delete-from-cart/${userid}/${productid}`,{headers});
  }
  public updateCart(data : any, id : number){
    let headers={"Content-Type":"application/json","Accept":"application/json","Authorization": `Bearer ${this.token}`};
    return this.http.put(`http://localhost:8000/api/cart/${id}`,data,{headers});
  }
  public getAdminView(){
    return this.http.get('http://localhost:8000/api/admins/products');
  }
  public deleteProduct(id:number){
    return this.http.delete(`http://localhost:8000/api/products/${id}`);
  }
  public getproductsadmin(){
    return this.http.get('http://localhost:8000/api/products');
  }
  updateProduct(product_id:any,data:any){
    let headers={"Content-Type":"application/json","Accept":"application/json","Authorization": `Bearer ${this.token}`};
    return this.http.put(`http://localhost:8000/api/products/${product_id}`,data, {headers});
  }
  addProduct(data:any){
    let headers={"Content-Type":"application/json","Accept":"application/json","Authorization": `Bearer ${this.token}`};
    console.log(data);
    return this.http.post('http://localhost:8000/api/products',data,{headers});
  }
}
