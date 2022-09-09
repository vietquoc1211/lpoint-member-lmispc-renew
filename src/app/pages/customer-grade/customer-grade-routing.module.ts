import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/_helpers/auth.guard';
import * as _grade from './customer-grade.index';

const routes: Routes = [
  {
    "path": "", canActivate: [AuthGuard],
    data: {
      title: 'Quản lý hạng khách hàng'
    },
    "children": [
      {
        "path": "customer-grade-list",
        "component": _grade.CustomerGradeListComponent,
        canActivate: [AuthGuard] 
      },
      {
        "path": "customer-grade-detail",
        "component": _grade.CustomerGradeDetailComponent,
        canActivate: [AuthGuard] 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerGradeRoutingModule { }