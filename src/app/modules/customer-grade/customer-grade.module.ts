import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomerGradeRoutingModule } from './customer-grade-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from '../../shared/material.module';
import * as _grade from './customer-grade.index';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CustomerGradeRoutingModule,
        NgxSpinnerModule,
        MaterialModule,
        SharedModule
    ], 
    declarations: 
    [
        _grade.CustomerGradeListComponent,
        _grade.CustomerGradeDetailComponent
    ],
    providers: [
    ]
})
export class CustomerGradeModule {
}