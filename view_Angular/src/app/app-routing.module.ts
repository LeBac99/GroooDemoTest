import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserComponent} from'./user/user.component';
import {AddUserComponent} from'./add-user/add-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {UserEditComponent} from './user-edit/user-edit.component';

const routes: Routes = [
	{path:'', redirectTo: '/', pathMatch: 'full'},
	{path:'user',component:UserComponent},	
	{path:'user/add-user',component:AddUserComponent},
	{path:'user/user-edit/:id',component:UserEditComponent},
	{path:'**',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
