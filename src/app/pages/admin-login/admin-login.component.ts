import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  status : string ='';

  constructor(private user : UserService){}

  onSubmit(loginForm:any){
   
    this.user.adminLogin(loginForm.value).subscribe((response:any)=>{
       this.status = response.message;
       localStorage.clear();
       localStorage.setItem('role','admin');
       location.href='/admin';
    });
    loginForm.reset();
    console.log(localStorage.getItem('role'));
    
  }

}
