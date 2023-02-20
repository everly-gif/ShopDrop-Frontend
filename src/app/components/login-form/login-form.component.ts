import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
status : string ='';

constructor (private user : UserService){}

onSubmit(loginForm : any){
 this.user.login(loginForm.value).subscribe((response:any)=>{
  this.status = response.message;
  console.log(localStorage.getItem('user_id'));
  console.log(response);
  if(response.success===true){
    localStorage.setItem('user_id', response.user.id);
    localStorage.setItem('username', response.user.name);
    localStorage.setItem('useremail', response.user.email);
    localStorage.setItem('token', response.token);
    localStorage.setItem('user_contact', response.user.contact);
    localStorage.setItem('role', 'user');
  }
  loginForm.reset();
  location.href='/';
 });
}

}
