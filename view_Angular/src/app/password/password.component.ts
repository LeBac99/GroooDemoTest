import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder , Validators} from '@angular/forms';
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
  result;
  angForm: FormGroup;

  constructor(private router:Router, private UserService:UserService, private fb: FormBuilder) { }

  ngOnInit( ): void {
    this.createForm();
  }
  createForm(){
    this.angForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]]
    });
  }

  password(){
    // console.log(this.user);
    this.UserService.password(this.user).subscribe(data=>{
      // console.log(data);
      // this.user=data;  
      this.result = alert('Xin mời bạn check mail!')
    })
  }

}
