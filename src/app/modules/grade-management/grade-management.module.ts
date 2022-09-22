import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from '../../shared/material.module';
import { GradeManagementRoutingModule } from './grade-management-routing.module';
import { GradeInfomationComponent, GradeSettingComponent, SettingRuleCustomerGradeComponent } from './grade-management.index';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
        GradeInfomationComponent,
        GradeSettingComponent,
        SettingRuleCustomerGradeComponent
    ],
    providers: [
    ]
})
export class GradeManagementModule {
}