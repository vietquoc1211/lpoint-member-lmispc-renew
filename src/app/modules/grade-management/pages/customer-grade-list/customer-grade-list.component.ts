import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerGradeService } from '../../services/customer-grade.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GradeInfo } from '../../models/grade-information.model';
import { ExportCsvService } from '../../../../shared/services/exportCsv.service';
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
  pageSizeOptions: number[] = [10, 25, 50, 100];
  dataSource = new MatTableDataSource();
  displayedColumns = ['stt', 'memberno', 'membernm', 'grade', 'point', 'startymd', 'endymd', 'usegbn', 'transcnt', 'action'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private customergradeService: CustomerGradeService,
    private spinnerService: NgxSpinnerService,
    private csvService: ExportCsvService
  ) { }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.spinnerService.show();
    this.customergradeService.GetAll(this.currentPage, this.pageSize, "MEMBERNO").subscribe(res => {
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
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.getData();
  }

  async exportData() {
    this.spinnerService.show();
    this.customergradeService.ExportList().subscribe(res => {
      let fields = [
        {
          label: "stt",
          key: "stt"
        },
        {
          label: "Mã số khách hàng",
          key: "memberno"
        },
        {
          label: "Tên khách hàng",
          key: "membernm"
        },
        {
          label: "Phân loại hạng",
          key: "grade"
        },
        {
          label: "Số điểm tích lũy",
          key: "point"
        },
        {
          label: "Ngày bắt đầu tham gia",
          key: "startymd"
        },
        {
          label: "Ngày kết thúc",
          key: "endymd"
        },
        {
          label: "Trạng thái",
          key: "usegbn"
        }
      ];
      this.csvService.downloadFile(res,fields,"customer-grade-list");
      this.spinnerService.hide();
    })
  }
}