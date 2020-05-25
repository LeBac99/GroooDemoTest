import { Component, OnInit } from '@angular/core';
import { UserType } from '../user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  user : UserType = new UserType();
  constructor(private router:Router, private UserService:UserService) { }

  ngOnInit(): void {
  }
  password(){
    // console.log(this.user);
    this.UserService.password(this.user).subscribe(data=>{
      console.log(data);
    })
  }

}
