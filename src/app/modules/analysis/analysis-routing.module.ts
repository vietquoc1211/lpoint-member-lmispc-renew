import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/_helpers/auth.guard';
import * as _analysic from './analysis.index';

const routes: Routes = [
  {
    "path": "", canActivate: [AuthGuard],
    data: {
      title: 'Phân Tích'
    },
    "children": [
      {
        "path": "mart",
        "component": _analysic.ReportmonthlyMartComponent,
        canActivate: [AuthGuard] 
      },
      {
        "path": "dps",
        "component": _analysic.ReportmonthlyDPSComponent,
        canActivate: [AuthGuard] 
      }, 
      {
        "path": "ria",
        "component": _analysic.ReportmonthlyRIAComponent,
        canActivate: [AuthGuard] 
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysisRoutingModule { }