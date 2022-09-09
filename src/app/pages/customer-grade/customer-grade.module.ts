import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomerGradeRoutingModule } from './customer-grade-routing.module';
import { CustomerGradeListComponent} from './customer-grade-list/customer-grade-list.component';
import { CustomerGradeDetailComponent } from './customer-grade-detail/customer-grade-detail.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from '../../shared/material.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CustomerGradeRoutingModule,
        NgxSpinnerModule,
        MaterialModule
    ], 
    declarations: 
    [
      CustomerGradeListComponent,
      CustomerGradeDetailComponent
    ],
    providers: [
    ]
})
export class CustomerGradeModule {
}