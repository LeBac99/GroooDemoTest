import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UserComponent} from'./user/user.component';
import {AddUserComponent} from'./add-user/add-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import { SearchComponent } from './search/search.component';
import {PasswordComponent} from'./password/password.component';
import { EnterpasswordComponent } from './enterpassword/enterpassword.component';



const routes: Routes = [
	{path:'', redirectTo: '/cp-login', pathMatch: 'full'},
	{path:'cp-login',component:LoginComponent},
	{path:'user',component:UserComponent},	
	{path:'user/add-user',component:AddUserComponent},
	{path:'user/user-edit/:id',component:UserEditComponent},
	{path:'search',component:SearchComponent},
	{path:'password',component:PasswordComponent},
	{path:'ressetpassword/:token', component:EnterpasswordComponent},
	{path:'**',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
