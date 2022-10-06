import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CustomerManagementRoutingModule } from './customer-management-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CustomerManagementRoutingModule,
        NgxSpinnerModule,
        SharedModule,
        MaterialModule
    ], 
    declarations: 
    [

    ],
    providers: [
    ]
})
export class CustomerManagementModule {
}