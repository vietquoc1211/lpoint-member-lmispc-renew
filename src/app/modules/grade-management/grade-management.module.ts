import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from '../../shared/material.module';
import { GradeManagementRoutingModule } from './grade-management-routing.module';
import * as _grade from './grade-management.index';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        GradeManagementRoutingModule,
        NgxSpinnerModule,
        MaterialModule    
    ], 
    declarations: 
    [
        _grade.GradeInfomationComponent,
        _grade.GradeInfomationEditComponent,
        _grade.GradeSettingComponent,
        _grade.SettingRuleCustomerGradeComponent
    ],
    providers: [
    ]
})
export class GradeManagementModule {
}