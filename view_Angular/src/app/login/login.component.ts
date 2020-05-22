import { Component, OnInit } from '@angular/core';
import { UserType } from '../user';

import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : UserType = new UserType();
  constructor(	private router:Router,private UserService:UserService,) { }

  ngOnInit(): void {
  }
  getLogin(){
    this.UserService.getLogin(this.user).subscribe(data=>{
      // console.log(data);
      this.router.navigate(['/user']);
    })
  }
  Logout(){}
}
