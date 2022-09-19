import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { GradeInfoService } from '../../services/gradeinfo.service';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';

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
        private _liveAnnouncer: LiveAnnouncer
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

    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState: Sort) {
      // This example uses English messages. If your application supports
      // multiple language, you would internationalize these strings.
      // Furthermore, you can customize the message to add additional
      // details about the values being sorted.
      if (sortState.direction) {
        this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
      } else {
        this._liveAnnouncer.announce('Sorting cleared');
      }
    }
    onView(element:any) {

    }

    onEdit(element:any) {

    }

    onDelete(element: any): void {
      if(confirm("Are you sure to delete "+element.gradenm)) {
        console.log("Implement delete functionality here");
      }
    }
}