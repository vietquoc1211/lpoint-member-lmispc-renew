import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GradeManagementRoutingModule } from './grade-management-routing.module';
import * as _grade from './grade-management.index';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        GradeManagementRoutingModule,
        SharedModule,
        MaterialModule
    ], 
    declarations: 
    [
        // custumer grade
        _grade.CustomerGradeListComponent,
        _grade.CustomerGradeDetailComponent,

        // grade management
        _grade.GradeInfomationComponent,
        _grade.GradeInfomationEditComponent,
        _grade.GradeSettingAccumulationComponent,
        _grade.SettingRuleCustomerGradeComponent
    ],
    providers: [
    ]
})
export class GradeManagementModule {
}