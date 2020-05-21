import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserType} from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API:string='http://localhost/api/user'
 constructor(	private Http: HttpClient) {}
  getUsers():Observable<UserType[]>{
    	return this.Http.get<UserType[]>(`${this.API}`);
  }
  getUser(id):Observable<UserType>{
    return this.Http.get<UserType>(`${this.API}/${id}`);
  }
  saveUser(user):Observable<UserType>{
  	console.log(user);
    return this.Http.put<UserType>(`${this.API}/${user.id}`, user);
  }
   deleteUser(id):Observable<UserType>{
    return this.Http.delete<UserType>(`${this.API}/${id}`);
    
  }
  searchUser(Seachname):Observable<UserType>{
    console.log(Seachname);
    return this.Http.post<UserType>(`${this.API}`,Seachname)
  }
  
}
