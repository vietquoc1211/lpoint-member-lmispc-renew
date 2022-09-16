import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReportmonthlyDPSComponent } from "./reportmonthlyMrLee/reportmonthlyDPS/reportmonthlyDPS.component";
import { ReportmonthlyMartComponent } from "./reportmonthlyMrLee/reportmonthlyMart/reportmonthlyMart.component";
import { ReportmonthlyRIAComponent } from "./reportmonthlyMrLee/reportmonthlyRIA/reportmonthlyRIA.component";
import { AnalysisRoutingModule } from './analysis-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AnalysisRoutingModule
    ], 
    declarations: 
    [
      ReportmonthlyMartComponent,
      ReportmonthlyDPSComponent,
      ReportmonthlyRIAComponent
    ],
    providers: [
    ]
})
export class AnalysisModule {
}