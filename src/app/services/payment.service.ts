import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http : HttpClient) { }
  token : any = localStorage.getItem('token');
  submitOrder(data :any ){
    let headers={"Content-Type":"application/json","Accept":"application/json","Authorization": `Bearer ${this.token}`};
    return this.http.post('http://localhost:8000/api/order',data, {headers});
  }
  addOrderDetails(data : any){
    let headers={"Content-Type":"application/json","Accept":"application/json","Authorization": `Bearer ${this.token}`};
    return this.http.post('http://localhost:8000/api/order-details',data , {headers});
  }
  getOrders(user_id:any){
    let headers={"Content-Type":"application/json","Accept":"application/json","Authorization": `Bearer ${this.token}`};
    return this.http.get(`http://localhost:8000/api/orders/${user_id}`,{headers} );
  }
}
