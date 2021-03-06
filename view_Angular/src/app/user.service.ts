import { Injectable } from '@angular/core';
import {Observable, from , BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserType} from './user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API:string='http://localhost/api/user'
  private APISEARCH:string='http://localhost/api/user/search'
  private APIURL:string='http://localhost/api/cp-login'
  private APIPASS:string='http://localhost/api/password'
  private APIPASSW:string='http://localhost/api/save-password'
  private currentUser :BehaviorSubject<UserType>;
  
 constructor(	private Http: HttpClient) {
   this.currentUser = new BehaviorSubject<UserType>(JSON.parse(localStorage.getItem('users')))
 }
 public get currentUserValue():UserType{
  return this.currentUser.value;
}
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
  searchUser(usersSearch):Observable<UserType>{
    console.log(usersSearch);
    return this.Http.post<UserType>(`${this.APISEARCH}`,{'key':usersSearch})
  }
  getLogin(users):Observable<UserType>{
    // console.log(users)
    return this.Http.post<UserType>(`${this.APIURL}`,users).pipe(
      map(res=>{
        localStorage.setItem('users',JSON.stringify(res));
        return res
      })
    )
  }
  password(email):Observable<UserType>{
    // console.log(email);
    return this.Http.post<UserType>(`${this.APIPASS}`,email)
  }
  gettoken(token):Observable<UserType>{
    return this.Http.get<UserType>(`${this.APIPASSW}/${token}`);
  }
  savePassword(token):Observable<UserType>{
    console.log(token);
    return this.Http.put<UserType>(`${this.APIPASSW}/${token.id}`,token)
  }
  Logout(){
    localStorage.removeItem('users');
  }
 
}
