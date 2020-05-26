import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import {UserType} from '../user';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user:UserType
  constructor(
  	 private routes:ActivatedRoute,
  	 private UserService:UserService,
  	 private router: Router
  	) { }

  ngOnInit(): void {
  	this.getUser();
  }
  getUser(){
  	this.routes.params.subscribe(param=>{
  		this.UserService.getUser(param.id).subscribe(data=>{
  			this.user=data;
  		})
  	})
  }
  saveUser(){	
  	this.UserService.saveUser(this.user).subscribe(data=>{
  		this.router.navigateByUrl('/user');
  	})
  }

}
