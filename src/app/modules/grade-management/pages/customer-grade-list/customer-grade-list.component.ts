import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { CustomerGradeService } from '../../services/customer-grade.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { GradeInfo } from '../../models/grade-information.model';

@Component({
  selector: 'app-customer-grade-list',
  templateUrl: './customer-grade-list.component.html',
  styleUrls: ['./customer-grade-list.component.css']
})
export class CustomerGradeListComponent implements OnInit {
  DataGrade: any;
  isLoading = false;
  totalRows = 0;
  pageSize = 10;
  currentPage = 0;
  pageSizeOptions: number[] = [10,25,50,100];
  dataSource =  new MatTableDataSource();
  displayedColumns = ['stt','memberno', 'membernm', 'grade', 'point','startymd','endymd','usegbn','transcnt','action'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor( private customergradeService: CustomerGradeService,
    private spinnerService: NgxSpinnerService
  ) { }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    //Load initial data
    this.getData();
  }
  
  async getData(){
    this.spinnerService.show();
    this.customergradeService.GetAllCustomerGradeList(this.currentPage,this.pageSize,"MEMBERNO").subscribe(res =>{
      this.DataGrade = res;
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
      setTimeout(() => {
        this.paginator.pageIndex = this.currentPage;
        this.paginator.length = 121073;
      });
      this.spinnerService.hide();
    })
  }

  pageChanged(event: PageEvent) {
    console.log({ event });
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.getData();
  }
}