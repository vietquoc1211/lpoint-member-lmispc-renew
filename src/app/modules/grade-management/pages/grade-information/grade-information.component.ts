import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { GradeInfoService } from '../../services/grade-information.service';
import { MatDialog } from '@angular/material/dialog';
import { GradeInfomationEditComponent } from './grade-information-edit/grade-information-edit.component';
import { ConfirmationDialogComponent } from '../../../../shared/component/confirmation-dialog/confirmation-dialog.component';
import { MessageConstants } from 'src/app/core/_common/messageConstants';
import { ToastrService } from 'ngx-toastr';

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
        public dialog: MatDialog,
        private _Toastr: ToastrService
      ) { }
    
    ngOnInit() {
        this.getData();
    }
      
    ngAfterViewInit() {

    }
    
    async getData(){
      this.spinnerService.show();
      this.gradeinfoService.Get().subscribe(res =>{
        this.dataGrade = res;
        this.dataSource = new MatTableDataSource(this.dataGrade);
        this.dataSource.paginator = this.paginator;
        this.spinnerService.hide();
      },error => {
        this.spinnerService.hide();
      })
    }
    
    onShowDialogGrade(action: string, data: any) {
      let dialogRef = this.dialog.open(GradeInfomationEditComponent, {
        data: {
          data: data,
          action: action
        },
        width: '600px',
        disableClose: true,
        panelClass: 'custom-modalbox'
      })

      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this._Toastr.success(action == "add" ? MessageConstants.CONFIRM_ADD_MSG : MessageConstants.UPDATED_OK_MSG);
          this.getData();
        }
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
          this.spinnerService.show();
          this.gradeinfoService.Delete(element.gradecd).subscribe(res =>{
            this._Toastr.success(MessageConstants.DELETED_OK_MSG);
            this.getData();
            this.spinnerService.hide();
          },error => {
            this.spinnerService.hide();
             console.log(error);
            this._Toastr.error(MessageConstants.SERVE_ERROR_MSG);
          })
        }
      });
    }
}