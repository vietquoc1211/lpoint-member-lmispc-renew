import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../../../shared/component/confirmation-dialog/confirmation-dialog.component';
import { SettingRuleCustomerGradeService } from "../../services/setting-rule-customer-grade.service";
import { SettingRuleCustomerGradeEditComponent } from './setting-rule-customer-grade-edit/setting-rule-customer-grade-edit.component';

@Component({
    selector: "setting-rule-customer-grade",
    templateUrl: './setting-rule-customer-grade.component.html',
    styleUrls: ['setting-rule-customer-grade.component.css']
})
export class SettingRuleCustomerGradeComponent {
    dataGrade: any;
    isLoading = false;
    totalRows = 1000;
    pageSize = 10;
    currentPage = 1;
    pageSizeOptions: number[] = [10,25,50,100];
    dataSource = new MatTableDataSource();
    displayedColumns = ['stt','asscd', 'startymd', 'endymd','baseamount','cycle','period','setupday','lastsetup','action'];
    @ViewChild(MatPaginator)
    paginator!: MatPaginator;

    constructor(private settingRuleService: SettingRuleCustomerGradeService,
        private spinnerService: NgxSpinnerService,
        public dialog: MatDialog
      ) { }
    
    ngOnInit() {
        this.getData();
    }
      
    ngAfterViewInit() {

    }
    
    async getData(){
      this.spinnerService.show();
      this.settingRuleService.getAll().subscribe(res =>{
        this.dataGrade = res;
        this.dataSource = new MatTableDataSource(this.dataGrade);
        this.dataSource.paginator = this.paginator;
        this.spinnerService.hide();
      })
    }
    
    onShowDialogSetting(action: string, data: any) {
      let dialogRef = this.dialog.open(SettingRuleCustomerGradeEditComponent, {
        data: {
          data: data,
          action: action
        },
        width: '600px',
        disableClose: true,
        panelClass: 'custom-modalbox'
      });
    }

    onDelete(element: any): void {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
        data:{
          message: 'Are you sure want to delete?',
          buttonText: {
            ok: 'Save',
            cancel: 'No'
          }
        }
      });  
      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        if (confirmed) {

        }
      });
    }
}