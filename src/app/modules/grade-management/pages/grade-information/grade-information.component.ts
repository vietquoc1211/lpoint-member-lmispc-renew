import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { GradeInfoService } from '../../services/gradeinfo.service';
import { MatDialog } from '@angular/material/dialog';
import { GradeInfomationEditComponent } from './grade-information-edit/grade-information-edit.component';
import { ConfirmationDialog } from 'src/app/shared/component/confirmation-dialog/confirmation-dialog.component';

@Component({
    selector: "grade-infomation",
    templateUrl:'./grade-information.component.html',
    styleUrls: ['./grade-information.component.css']
})
export class GradeInfomationComponent {
    dataGrade: any;
    isLoading = false;
    totalRows = 1000;
    pageSize = 10;
    currentPage = 1;
    pageSizeOptions: number[] = [10,25,50,100];
    dataSource = new MatTableDataSource();
    displayedColumns = ['stt','gradecd', 'gradenm', 'usegbn', 'fromcnt','tocnt','ftpsend','lastymd','lastsabun','action'];
  
    @ViewChild(MatPaginator)
    paginator!: MatPaginator;

    constructor( private gradeinfoService: GradeInfoService,
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
      this.gradeinfoService.getAll().subscribe(res =>{
        this.dataGrade = res;
        this.dataSource = new MatTableDataSource(this.dataGrade);
        this.dataSource.paginator = this.paginator;
        this.spinnerService.hide();
      })
    }

    onView(element:any) {
      let dialogRef = this.dialog.open(GradeInfomationEditComponent, {
        data: {
          data: element,
          onEdit: false
        },
        width: '600px',
        disableClose: true,
        panelClass: 'custom-modalbox'
      });
    }

    onEdit(element:any) {
      let dialogRef = this.dialog.open(GradeInfomationEditComponent, {
        data: {
          data: element,
          onEdit: true
        },
        width: '600px',
        disableClose: true,
        panelClass: 'custom-modalbox'
      });
    }

    onDelete(element: any): void {
      const dialogRef = this.dialog.open(ConfirmationDialog,{
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