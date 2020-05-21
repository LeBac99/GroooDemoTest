import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserType } from '../user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: UserType[];
  
  constructor(
  	private UserService:UserService,
  	) { }

  ngOnInit() {
   this.getUsers()
  }
  getUsers(){
  	 this.UserService.getUsers().subscribe(data =>{
      this.users=data;
      // console.log(data);
    });
  }

  searchUser(){
   
    
  }

  deleteUser(id){
    if(confirm('Bạn có chắc chắn muốn xóa !')){
      this.UserService.deleteUser(id).subscribe((result: UserType)=>{
        this.ngOnInit()
      });
      // this.UserService.deleteUser(id).subscribe(data=>{
      //   this.users=this.users.filter(item=>item.id != data.id);
      // })
    }
  }

}
