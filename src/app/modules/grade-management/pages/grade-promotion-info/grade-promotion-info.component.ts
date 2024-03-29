import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../../../shared/component/confirmation-dialog/confirmation-dialog.component';
import { GradePromotionInfoService } from "../../services/grade-promotion-info.service";
import { MessageConstants } from 'src/app/core/_common/messageConstants';
import { ToastrService } from 'ngx-toastr';
import { GradePromotionInfoEditComponent } from './grade-promotion-info-edit/grade-promotion-info-edit.component';
@Component ({
    selector: "grade-promotion-info",
    templateUrl: './grade-promotion-info.component.html',
    styleUrls: ['./grade-promotion-info.component.css']
})

export class GradePromotionInfoComponent {
    dataGrade: any;
    isLoading = false;
    totalRows = 1000;
    pageSize = 10;
    currentPage = 1;
    pageSizeOptions: number[] = [10,25,50,100];
    dataSource = new MatTableDataSource();
    displayedColumns = ['stt','asscd','gradecd','gradenm','startymd', 'endymd','cycle','status','accumulate_point','ratio_accumulate_point','discount','ratio_discount','note','insymd','action'];
    @ViewChild(MatPaginator)
    paginator!: MatPaginator;

    constructor(private settingService: GradePromotionInfoService,
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
      this.settingService.Get().subscribe(res =>{
        this.dataGrade = res;
        this.dataSource = new MatTableDataSource(this.dataGrade);
        this.dataSource.paginator = this.paginator;
        this.spinnerService.hide();
      })
    }
    
    onShowDialogSetting(action: string, data: any) {
      let dialogRef = this.dialog.open(GradePromotionInfoEditComponent, {
        data: {
          data: data,
          action: action
        },
        width: '600px',
        height: '700px',
        disableClose: true,
        panelClass: 'custom-modalbox'
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this._Toastr.success(action == "add" ? MessageConstants.CREATED_OK_MSG : MessageConstants.UPDATED_OK_MSG);
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
          this.settingService.Delete(element.gradecd,element.asscd).subscribe({
            next: (response) => {
              this._Toastr.success(MessageConstants.DELETED_OK_MSG);
              this.spinnerService.hide();
              this.getData();
            },
            error: (error) => {
              this._Toastr.error(MessageConstants.SYSTEM_ERROR_MSG);
              this.spinnerService.hide();
            }
          }); 
        }
      });
    }
}