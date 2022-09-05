import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomerGradeRoutingModule } from './customer-grade-routing.module';
import { CustomerGradeListComponent} from './customer-grade-list/customer-grade-list.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CustomerGradeRoutingModule,
        NgxSpinnerModule
    ], 
    declarations: 
    [
      CustomerGradeListComponent,
    ],
    providers: [
    ]
})
export class CustomerGradeModule {
}