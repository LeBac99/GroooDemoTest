import { Component, OnInit } from '@angular/core';
import { UserType } from '../user';
import { AddUserService } from '../add-user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : UserType = new UserType();
  constructor(	private router:Router,private AddUserService:AddUserService,) { }

  ngOnInit(): void {
  }
  getLogin(){
    this.AddUserService.getLogin(this.user).subscribe(data=>{
      console.log(data);
    })
  }
}
