import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { PasswordComponent } from '../password/password.component';

@Component({
  selector: 'app-enterpassword',
  templateUrl: './enterpassword.component.html',
  styleUrls: ['./enterpassword.component.css']
})
export class EnterpasswordComponent implements OnInit {

  constructor(private PasswordComponent:PasswordComponent) { }

  ngOnInit(): void {
  }

}
