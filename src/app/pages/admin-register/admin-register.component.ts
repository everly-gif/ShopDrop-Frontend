import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent {
  status : string ='';

  constructor(private user : UserService){}

  onSubmit(signupForm:any){
   
    this.user.adminRegister(signupForm.value).subscribe((response:any)=>{
       this.status = response.message;
    });
    signupForm.reset();
  }
}
