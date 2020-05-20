import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AddUserService } from '../add-user.service';
import { UserType } from '../user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
	user : UserType = new UserType();
   angForm: FormGroup;
  constructor(
  	private AddUserService:AddUserService,
  	private router:Router,
    private fb: FormBuilder
  	) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
       name: ['',[Validators.required,Validators.minLength(4)]],
       email: ['',[Validators.required,Validators.email]],
       password: ['', Validators.required ]
    });
  }
  addUser(){
  	this.AddUserService.addUser(this.user).subscribe(data=>{
  		this.router.navigateByUrl('/user');
  	})
  }

}
