
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404AltComponent } from './pages/error/page404-alt/page404-alt.component';
import { Page404Component } from './pages/error/page404/page404.component';
import { Page406Component } from './pages/error/page406/page406.component';
import { Page500Component } from './pages/error/page500/page500.component';

const routes: Routes = [
  {
    path: 'analysis',
    loadChildren: () => import('./pages/analysis/analysis.module').then((m) => m.AnalysisModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: '',
    redirectTo: 'users/login',
    pathMatch: 'full'
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
    // {
    //     "path": "**",
    //     "redirectTo": "page-404",
    //     "pathMatch": "full"
    // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }