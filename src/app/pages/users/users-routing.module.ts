import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as _users from './users.index';

const routes: Routes = [
  {
    "path": "",
    data: {
      title: 'Users'
    },
    "children": [
      {
        "path": "login",
        "component": _users.LoginComponent,
        data: {
          title: 'Login User'
        }
      },
      {
        "path": "logout",
        "component": _users.LogoutComponent,
        data: {
          title: 'Logout'
        }
      }, 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }