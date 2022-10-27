import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { CustomerGradeDetail } from "../../models/customer-grade.model";
import { CustomerGradeService } from "../../services/customer-grade.service";

@Component({
    selector: 'customer-grade-detail',
    templateUrl: './customer-grade-detail.component.html',
    styleUrls: ['./customer-grade-detail.component.css']
})
export class CustomerGradeDetailComponent {
  dataDetail: CustomerGradeDetail = new CustomerGradeDetail();
  displayedColumns = ['memberno', 'asscd', 'gradenm', 'workymd', 'worktime', 'startymd', 'endymd', 'usegbn', 'point','updreason'];
  dataHistory = new MatTableDataSource();
  memberno: string = '';
  constructor(private customergradeService: CustomerGradeService,
    private spinnerService: NgxSpinnerService,
    public dialog: MatDialog,
    private _Toastr: ToastrService)
    {

    }
  
  ngOnInit() {

  }


  async getData(event:any) {
    this.memberno = event.target.value;
    this.dataDetail = new CustomerGradeDetail(); 
    this.dataDetail.memberno = this.memberno;
    this.dataHistory = new MatTableDataSource();
    this.spinnerService.show();
    await this.customergradeService.GetCustomerGradeDetail(this.memberno).subscribe(res => {
      if(res.length > 0) {
        this.dataDetail = res[0];
        this.customergradeService.GetCustomerGradeHistory(this.memberno).subscribe(res => {
          this.dataHistory = res;
        });
      }
      else {
        this._Toastr.info("Không tìm thấy thông tin khách hàng");
      }
      this.spinnerService.hide();
    },error => {
      this._Toastr.info("Không tìm thấy thông tin khách hàng");
      this.spinnerService.hide();
    })
  }

  async getDataHistory(memberno:string) {   
    this.customergradeService.GetCustomerGradeHistory(memberno).subscribe(res => {
      this.dataHistory = res;
    })
  }

}