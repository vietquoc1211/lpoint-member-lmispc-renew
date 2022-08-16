import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as _analysic from './analysis.index';

const routes: Routes = [
  {
    "path": "",
    data: {
      title: 'Phân Tích'
    },
    "children": [
      {
        "path": "mart",
        "component": _analysic.ReportmonthlyMartComponent,
        data: {
          title: 'Mart monthly report'
        }
      },
      {
        "path": "dps",
        "component": _analysic.ReportmonthlyDPSComponent,
        data: {
          title: 'DPS monthly report'
        }
      }, 
      {
        "path": "ria",
        "component": _analysic.ReportmonthlyRIAComponent,
        data: {
          title: 'RIA monthly report'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysisRoutingModule { }