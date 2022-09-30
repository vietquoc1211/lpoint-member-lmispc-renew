import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import * as _auth from "./authentication.index";
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthenticationRoutingModule,
        NgxSpinnerModule
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