import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../../../shared/component/confirmation-dialog/confirmation-dialog.component';
import { SettingRuleCustomerGradeService } from "../../services/setting-rule-customer-grade.service";

@Component ({
    selector: "grade-setting-accumulation",
    templateUrl: './grade-setting-accumulation.component.html',
    styleUrls: ['./grade-setting-accumulation.component.css']
})

export class GradeSettingAccumulationComponent {
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
    
    onShowDialogGrade(action: string, data: any) {
      
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