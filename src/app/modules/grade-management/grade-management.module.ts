import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GradeManagementRoutingModule } from './grade-management-routing.module';
import * as _grade from './grade-management.index';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { MatTableExporterModule } from 'mat-table-exporter';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        GradeManagementRoutingModule,
        SharedModule,
        MaterialModule,
        MatTableExporterModule
    ], 
    declarations: 
    [
        // custumer grade
        _grade.CustomerGradeListComponent,
        _grade.CustomerGradeDetailComponent,
        _grade.CustomerGradeEditComponent,

        // grade management
        _grade.GradeInfomationComponent,
        _grade.GradeInfomationEditComponent,
        _grade.GradeSettingAccumulationComponent,
        _grade.GradeSettingAccumulationEditComponent,
        _grade.SettingRuleCustomerGradeComponent,
        _grade.SettingRuleCustomerGradeEditComponent
    ],
    providers: [
        MatTableExporterModule
    ]
})
export class GradeManagementModule {
}