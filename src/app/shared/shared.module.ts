import { NgModule } from '@angular/core';

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

    ],
    providers: [
    ]
})
export class SharedModule {
}