
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
// import { AuthGuardService } from '../_services/authguard.service';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from "./error/page404/page404.component";
import { Page404AltComponent} from './error/page404-alt/page404-alt.component';
import { Page406Component } from "./error/page406/page406.component";
import { Page500Component} from './error/page500/page500.component';
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";

const routes: Routes = [
    {
        "path": "",
        "component": PagesComponent,
        // 'canActivate': [AuthGuardService],
        "children": [
            // {
            //     "path": "index",
            //     "loadChildren": ".\/default\/index.module#IndexModule"
            // },
            // {
            //     "path": "admin",
            //     "loadChildren": ".\/admin\/admin.module#AdminModule"
            // },
            // {
            //     "path": "his-danh-muc",
            //     "loadChildren": ".\/his-danh-muc\/his-danh-muc.module#HisDanhMucModule"
            // },
            // {
            //     "path": "duoc-danh-muc",
            //     "loadChildren": ".\/duoc-danh-muc\/duoc-danh-muc.module#DuocDanhMucModule"
            // },
            // {
            //     "path": "vien-phi-danh-muc",
            //     "loadChildren": ".\/vien-phi-danh-muc\/vp-danh-muc.module#VienPhiDanhMucModule"
            // },
            // {
            //     "path": "kham-benh",
            //     "loadChildren": ".\/kham-benh\/kham-benh.module#KhamBenhModule"
            // },
            // {
            //     "path": "kho-duoc",
            //     "loadChildren": ".\/kho-duoc\/kho-duoc.module#KhoDuocModule"
            // },
            {
                "path": "",
                "redirectTo": "index",
                "pathMatch": "full"
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login'
        }
    },
    {
        path: 'logout',
        component: LogoutComponent,
        data: {
          title: 'Logout'
        }
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
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }