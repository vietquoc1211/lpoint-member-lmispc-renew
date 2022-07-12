import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from "./app-routing.module";
import { PagesRoutingModule } from "./pages/pages-routing.module";
import { LoginComponent } from './pages/login/login.component';
import { Page404Component } from './pages/error/page404/page404.component';
import { Page404AltComponent } from './pages/error/page404-alt/page404-alt.component';
import { Page500Component } from './pages/error/page500/page500.component';
import { Page406Component } from './pages/error/page406/page406.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { PagesComponent } from './pages/pages.component';
import { LpointAdminComponent } from './pages/lpoint-admin/lpoint-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Page404Component,
    Page404AltComponent,
    Page500Component,
    Page406Component,
    LogoutComponent,
    PagesComponent,
    LpointAdminComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    PagesRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
