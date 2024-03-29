import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LayoutModule } from './shared/layout/layout.module';
import { AppRoutingModule } from "./app-routing.module";
import { Page404Component } from './modules/error/page404/page404.component';
import { Page404AltComponent } from './modules/error/page404-alt/page404-alt.component';
import { Page500Component } from './modules/error/page500/page500.component';
import { Page406Component } from './modules/error/page406/page406.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor, JwtInterceptor } from './core/_helpers';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    Page404AltComponent,
    Page500Component,
    Page406Component
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      closeButton: true,
      timeOut: 5000, //5 seconds
      progressBar: true
    }),
  ],
  entryComponents:[
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
