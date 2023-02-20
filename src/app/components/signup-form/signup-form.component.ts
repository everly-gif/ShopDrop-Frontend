import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  status : string ='';

  constructor(private user : UserService){}

  onSubmit(signupForm:any){
   
    this.user.register(signupForm.value).subscribe((response:any)=>{
       this.status = response.message;
       if(response.success===true){
        location.href='/';
       }
    });
    signupForm.reset();
  }
}
