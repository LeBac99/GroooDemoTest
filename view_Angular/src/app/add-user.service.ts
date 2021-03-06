import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserType} from './user';
@Injectable({
  providedIn: 'root'
})
export class AddUserService {
  private API:string='http://localhost/api/user/add-user'
  
  
  constructor(private Http: HttpClient) { }
   
   addUser(user):Observable<UserType>{
   		// console.log(user);
    return this.Http.post<UserType>(`${this.API}`,user)
  }
  
}
