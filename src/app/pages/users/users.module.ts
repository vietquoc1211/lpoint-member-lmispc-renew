import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent} from "./login/login.component";
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UsersRoutingModule
    ], 
    exports: [
       LoginComponent
    ],
    declarations: 
    [
       LoginComponent,
      // LogoutComponent,
    ],
    providers: [
    ]
})
export class UsersModule {
}