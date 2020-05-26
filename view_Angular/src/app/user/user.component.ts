import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserType } from '../user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: UserType[];
  usersSearch:UserType;
  search:string;
  constructor(
    private UserService:UserService,
    private router: Router
  	) { }

  ngOnInit() {
   this.getUsers();
   
  }
  getUsers(){
  	 this.UserService.getUsers().subscribe(data =>{
      this.users=data;
      // console.log(data);
    });
  }

  searchUser(){
    // console.log()
    this.UserService.searchUser(this.search).subscribe((data:any)=>{
      // console.log(data);
      this.usersSearch=data.data;
      // this.router.navigateByUrl('/search');

    })
    
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
  Logout(){
    this.router.navigate(['/cp-login']);
  }

}
