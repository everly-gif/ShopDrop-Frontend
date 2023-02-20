import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
 user_type : any;

 user_id : any;

 constructor(){}

  ngOnInit(): void {
    this.user_type = localStorage.getItem('role');
    this.user_id = localStorage.getItem('user_id');
    console.log(this.user_type);
  }






}
