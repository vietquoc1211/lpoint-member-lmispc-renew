import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../../../shared/component/confirmation-dialog/confirmation-dialog.component';
import { GradeSettingAccumulationService } from '../../services/grade-setting-accumulation.service';
import { GradeSettingAccumulationEditComponent } from './grade-setting-accumulation-edit/grade-setting-accumulation-edit.component';

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
    displayedColumns = ['stt','asscd', 'gradecd', 'savetype','amount','yearreward','insymd','inssabun','lastymd','action'];
    @ViewChild(MatPaginator)
    paginator!: MatPaginator;

    constructor(private _gradeSettingService: GradeSettingAccumulationService,
        private spinnerService: NgxSpinnerService,
        public dialog: MatDialog
      ) { 

    }
    
    ngOnInit() {
        this.getData();
    }
      
    ngAfterViewInit() {

    }
    
    async getData(){
      this.spinnerService.show();
      this._gradeSettingService.getAll().subscribe(res =>{
        this.dataGrade = res;
        this.dataSource = new MatTableDataSource(this.dataGrade);
        this.dataSource.paginator = this.paginator;
        this.spinnerService.hide();
      })
    }
    
    onShowDialogGradeSetting(action: string, data: any) {
      let dialogRef = this.dialog.open(GradeSettingAccumulationEditComponent, {
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