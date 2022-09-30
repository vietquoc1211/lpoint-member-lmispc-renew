import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import * as _auth from "./authentication.index";
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthenticationRoutingModule
    ], 
    exports: [
        _auth.LoginComponent,
        _auth.ConfirmEmailComponent,
        _auth.LockScreenComponent,
        _auth.LogoutComponent,
        _auth.RecoverPasswordComponent,
        _auth.RegisterComponent
    ],
    declarations: 
    [
        _auth.LoginComponent,
        _auth.ConfirmEmailComponent,
        _auth.LockScreenComponent,
        _auth.LogoutComponent,
        _auth.RecoverPasswordComponent,
        _auth.RegisterComponent
    ],
    providers: [
    ]
})
export class AuthenticationModule {
}