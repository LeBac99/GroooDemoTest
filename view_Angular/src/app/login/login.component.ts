import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder , Validators} from '@angular/forms';
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
  angForm: FormGroup;
  constructor(	private router:Router, private UserService:UserService,  private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.angForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['', Validators.required ]
    });
  }
  getLogin(){
    this.UserService.getLogin(this.user).subscribe(data=>{
      // console.log(data);
    
    this.router.navigate(['/user']);
    })
  }
 
 
}
