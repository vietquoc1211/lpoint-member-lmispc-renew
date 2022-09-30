import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as layout from './index';

@NgModule({
    declarations: [
      layout.FooterComponent,
      layout.HeaderComponent,
      layout.LeftsideMenuComponent,
      layout.RightSidebarComponent,
      layout.HelpBoxComponent,
      layout.LanguagesComponent,
      layout.NotificationComponent,
      layout.BrandsComponent,
      layout.TopSearchComponent,
      layout.AccountUserComponent,
      layout.PageTitleBoxComponent
    ],
    exports: [
      layout.FooterComponent,
      layout.HeaderComponent,
      layout.LeftsideMenuComponent,
      layout.RightSidebarComponent,
      layout.HelpBoxComponent,
      layout.LanguagesComponent,
      layout.NotificationComponent,
      layout.BrandsComponent,
      layout.TopSearchComponent,
      layout.AccountUserComponent,
      layout.PageTitleBoxComponent
    ],
    imports: [
      CommonModule,
      RouterModule
    ],
    providers: [
    ]
})
export class LayoutModule {
}