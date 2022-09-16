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
      {
        "path": "grade-information",
        "component": _grade.GradeInfomationComponent
      },
      {
        "path": "grade-setting-accumulation",
        "component": _grade.GradeSettingComponent
      },
      {
        "path" : "setting-rule-customer-grade",
        "component" : _grade.SettingRuleCustomerGradeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradeManagementRoutingModule { }