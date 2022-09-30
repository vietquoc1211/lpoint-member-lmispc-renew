import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as _auth from './authentication.index';

const routes: Routes = [
  {
    "path": "",
    data: {
      title: 'authentication'
    },
    "children": [
      {
        "path": "login",
        "component": _auth.LoginComponent,
        data: {
          title: 'Login User'
        }
      },
      {
        "path": "logout",
        "component": _auth.LogoutComponent,
        data: {
          title: 'Logout'
        }
      },
      {
        "path": "confirm-email",
        "component": _auth.ConfirmEmailComponent,
        data: {
          title: 'confirm-email'
        }
      }, 
      {
        "path": "lock-screen",
        "component": _auth.LockScreenComponent,
        data: {
          title: 'lock-screen'
        }
      }, 
      {
        "path": "recover-password",
        "component": _auth.RecoverPasswordComponent,
        data: {
          title: 'recover-password'
        }
      }, 
      {
        "path": "register",
        "component": _auth.RegisterComponent,
        data: {
          title: 'register'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }