import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  token : any = localStorage.getItem('token');
  
  public register(data : any){
    let headers={"Content-Type":"application/json","Accept":"application/json","Authorization": `Bearer ${this.token}`};
   return this.http.post('http://localhost:8000/api/users',data,{headers});
  }
  
  public login(data:any){
    let headers={"Content-Type":"application/json","Accept":"application/json","Authorization": `Bearer ${this.token}`};
    return this.http.post('http://localhost:8000/api/users/login',data,{headers});
  }

  public adminRegister(data : any){
    let headers={"Content-Type":"application/json","Accept":"application/json","Authorization": `Bearer ${this.token}`};
    return this.http.post('http://localhost:8000/api/admins/register',data,{headers});
   }
   
   public adminLogin(data:any){
    let headers={"Content-Type":"application/json","Accept":"application/json","Authorization": `Bearer ${this.token}`};
     return this.http.post('http://localhost:8000/api/admins/login',data, {headers});
   }
}
