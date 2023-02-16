import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  
  public register(data : any){
   return this.http.post('http://localhost:8000/api/users',data);
  }
  
  public login(data:any){
    return this.http.post('http://localhost:8000/api/users/login',data);
  }
}
