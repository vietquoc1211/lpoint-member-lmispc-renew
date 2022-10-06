import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { CustomerGradeService } from '../../services/customer-grade.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-customer-grade-list',
  templateUrl: './customer-grade-list.component.html',
  styleUrls: ['./customer-grade-list.component.css']
})
export class CustomerGradeListComponent implements OnInit {
  DataGrade: any;
  isLoading = false;
  totalRows = 1000;
  pageSize = 10;
  currentPage = 1;
  pageSizeOptions: number[] = [10,25,50,100];
  dataSource = new MatTableDataSource();
  displayedColumns = ['stt','memberno', 'membernm', 'grade', 'point','startymd','endymd','usegbn','transcnt','action'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
  }

  constructor( private customergradeService: CustomerGradeService,
    private spinnerService: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.getData();
  }
  
  async getData(){
    this.spinnerService.show();
    this.customergradeService.getAll().subscribe(res =>{
      this.DataGrade = res;
      this.dataSource = new MatTableDataSource(this.DataGrade);
      this.dataSource.paginator = this.paginator;
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