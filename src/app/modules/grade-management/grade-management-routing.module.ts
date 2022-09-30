import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/_helpers/auth.guard';
import * as _grade from './grade-management.index';

const routes: Routes = [
  {
    "path": "", canActivate: [AuthGuard],
    data: {
      title: 'Quản lý hạng thẻ'
    },
    "children": [
      // Custumer grade
      {
        "path": "customer-grade-list", "component": _grade.CustomerGradeListComponent, canActivate: [AuthGuard] 
      },
      {
        "path": "customer-grade-detail","component": _grade.CustomerGradeDetailComponent,canActivate: [AuthGuard] 
      },
      // Grade management
      {
        "path": "grade-information", "component": _grade.GradeInfomationComponent,canActivate: [AuthGuard] 
      },
      {
        "path": "grade-setting-accumulation", "component": _grade.GradeSettingComponent, canActivate: [AuthGuard] 
      },
      {
        "path" : "setting-rule-customer-grade","component" : _grade.SettingRuleCustomerGradeComponent, canActivate: [AuthGuard] 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradeManagementRoutingModule { }