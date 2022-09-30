import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import * as shared from './shared.index';

@NgModule({
    declarations: [
      shared.AlertDialogComponent,
      shared.ConfirmationDialogComponent,
      shared.PageMaintenanceComponent
    ],
    exports: [
      shared.AlertDialogComponent,
      shared.ConfirmationDialogComponent,
      shared.PageMaintenanceComponent
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