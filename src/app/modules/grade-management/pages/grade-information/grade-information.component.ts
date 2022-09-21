import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { GradeInfoService } from '../../services/gradeinfo.service';
import { MatSort, Sort} from '@angular/material/sort';
import { LiveAnnouncer} from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { GradeInfomationEditComponent } from './grade-information-edit/grade-information-edit.component';
import { ConfirmationDialog } from 'src/app/shared/component/confirmation-dialog/confirmation-dialog.component';

@Component({
    selector: "grade-infomation",
    templateUrl:'./grade-information.component.html',
    styleUrls: ['./grade-information.component.css']
})
export class GradeInfomationComponent {
    DataGrade: any;
    isLoading = false;
    totalRows = 1000;
    pageSize = 10;
    currentPage = 1;
    pageSizeOptions: number[] = [10,25,50,100];
    dataSource = new MatTableDataSource();
    displayedColumns = ['stt','gradecd', 'gradenm', 'usegbn', 'fromcnt','tocnt','ftpsend','lastymd','lastsabun','action'];
  
    @ViewChild(MatPaginator)
    paginator!: MatPaginator;
    @ViewChild(MatSort)
    sort!: MatSort;

    constructor( private gradeinfoService: GradeInfoService,
        private spinnerService: NgxSpinnerService,
        private _liveAnnouncer: LiveAnnouncer,
        public dialog: MatDialog
      ) { }
    
    ngOnInit() {
        this.getData();
    }
      
    ngAfterViewInit() {
      this.dataSource.sort = this.sort;
    }
    
    async getData(){
        this.spinnerService.show();
        this.gradeinfoService.getAll().subscribe(res =>{
          this.DataGrade = res;
          this.dataSource = new MatTableDataSource(this.DataGrade);
          this.dataSource.paginator = this.paginator;
          this.spinnerService.hide();
        })
    }

    onView(element:any) {
      let dialogRef = this.dialog.open(GradeInfomationEditComponent, {
        height: '400px',
        width: '600px',
      });
    }

    onEdit(element:any) {
      let dialogRef = this.dialog.open(GradeInfomationEditComponent, {
        height: '400px',
        width: '600px',
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