import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { GradeInfoService } from 'src/app/core/_services';

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
    
    constructor( private gradeinfoService: GradeInfoService,
        private spinnerService: NgxSpinnerService
      ) { }
    
    ngOnInit() {
        this.getData();
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
}