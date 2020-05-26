import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { UserType } from '../user';



@Component({
  selector: 'app-enterpassword',
  templateUrl: './enterpassword.component.html',
  styleUrls: ['./enterpassword.component.css']
})
export class EnterpasswordComponent implements OnInit {
  token: UserType;
  constructor(
    private router: Router,
    private routes: ActivatedRoute,
    private UserService: UserService
  ) { }

  ngOnInit(): void {
    this.gettoken();
  }
  gettoken() {
    this.routes.params.subscribe(param => {
      this.UserService.gettoken(param.token).subscribe(data => {

        this.token = data;
        // console.log(this.token.id);
      })
    })
  }
  savePassword() {
    this.UserService.savePassword(this.token).subscribe(data => {
      // console.log(data);
      this.router.navigate(['/cp-login']);
    })
  }

}
