import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http : HttpClient) { }

  submitOrder(data :any ){
    return this.http.post('http://localhost:8000/api/order',data);
  }
  addOrderDetails(data : any){
    return this.http.post('http://localhost:8000/api/order-details',data);
  }
}
