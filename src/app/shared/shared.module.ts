import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as shared from './index';

@NgModule({
    declarations: [
      shared.FooterComponent,
      shared.HeaderComponent,
      shared.LeftsideMenuComponent,
      shared.RightSidebarComponent,
      shared.HelpBoxComponent,
      shared.LanguagesComponent,
      shared.NotificationComponent,
      shared.BrandsComponent,
      shared.TopSearchComponent,
      shared.AccountUserComponent
    ],
    exports: [
      shared.FooterComponent,
      shared.HeaderComponent,
      shared.LeftsideMenuComponent,
      shared.RightSidebarComponent,
      shared.HelpBoxComponent,
      shared.LanguagesComponent,
      shared.NotificationComponent,
      shared.BrandsComponent,
      shared.TopSearchComponent,
      shared.AccountUserComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
    ],
    providers: [
    ]
})
export class SharedModule {
}