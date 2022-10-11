import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerGradeService } from '../../services/customer-grade.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ExportCsvService } from '../../../../shared/services/exportCsv.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/component/confirmation-dialog/confirmation-dialog.component';
import { CustomerGradeEditComponent } from '../customer-grade-edit/customer-grade-edit.component';
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


  public minDate: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild('dp1') dp1:any;

  constructor(private customergradeService: CustomerGradeService,
    private spinnerService: NgxSpinnerService,
    private csvService: ExportCsvService,
    public dialog: MatDialog
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

  onShowDialogGrade(action: string, data: any) {
    let dialogRef = this.dialog.open(CustomerGradeEditComponent, {
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

  Changedate(e:any) {
    // if (e)
    //   if (this.formdata.controls.NgayBatDau.value > this.formdata.controls.NgayKetThuc.value) {
    //     this.openPicker();
    //   }
    // this.minDate = new Date(this.formdata.controls.NgayBatDau.value);
  }

  openPicker() {
    this.dp1.open();
  }

}