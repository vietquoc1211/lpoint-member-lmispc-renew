
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/_helpers';
import { DashboardsComponent } from './modules/dashboards/dashboards.component';
import { Page404AltComponent } from './modules/error/page404-alt/page404-alt.component';
import { Page404Component } from './modules/error/page404/page404.component';
import { Page406Component } from './modules/error/page406/page406.component';
import { Page500Component } from './modules/error/page500/page500.component';

const routes: Routes = [
  {
    path: 'analysis',
    loadChildren: () => import('./modules/analysis/analysis.module').then((m) => m.AnalysisModule),
  },
  {
    path: 'authentication',
    loadChildren: () => import('./modules/authentication/authentication.module').then((m) => m.AuthenticationModule),
  },
  {
    path: 'customer-grade',
    loadChildren: () => import('./modules/customer-grade/customer-grade.module').then((m) => m.CustomerGradeModule),
  },
  {
    path: 'grade-management',
    loadChildren: () => import('./modules/grade-management/grade-management.module').then((m) => m.GradeManagementModule),
  },
  {
    path: '',
    redirectTo: 'authentication/login',
    pathMatch: 'full'
  }, 
  {
    path: 'dashboards',
    component: DashboardsComponent,
    canActivate: [AuthGuard]
  }, 
  {
      path: "page-404",
      component: Page404Component,
      data: {
          title: 'Page Not Found'
      }
    },
    {
      path: "page-406-alt",
      component: Page404AltComponent,
      data: {
          title: 'Page Not Found'
      }
    },
    {
      path: "page-406",
      component: Page406Component,
      data: {
          title: 'Page Not Acceptable'
      }
    },
    {
      path: "page-500",
      component: Page500Component,
      data: {
          title: 'Internal Server Error'
      }
    },
    {
        "path": "**",
        "redirectTo": "page-404",
        "pathMatch": "full"
    },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }