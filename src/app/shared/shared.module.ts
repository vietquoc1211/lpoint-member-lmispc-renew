import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
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
      shared.AccountUserComponent,
      shared.PageTitleBoxComponent,
      shared.AlertDialogComponent,
      shared.ConfirmationDialog
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
      shared.AccountUserComponent,
      shared.PageTitleBoxComponent,
      shared.AlertDialogComponent,
      shared.ConfirmationDialog,
    ],
    imports: [
      CommonModule,
      RouterModule,
      MaterialModule
    ],
    providers: [
    ]
})
export class SharedModule {
}