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
 });
}

}
