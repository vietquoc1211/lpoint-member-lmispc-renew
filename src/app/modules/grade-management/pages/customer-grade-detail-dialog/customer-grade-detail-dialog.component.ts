import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { CustomerGradeDetail } from "../../models/customer-grade.model";
import { CustomerGradeService } from "../../services/customer-grade.service";

@Component({
    selector: 'customer-grade-detail-dialog',
    templateUrl: './customer-grade-detail-dialog.component.html',
    styleUrls: ['./customer-grade-detail-dialog.component.css']
})
export class  CustomerGradeDetailDialogComponent {
  dataDetail: CustomerGradeDetail = new CustomerGradeDetail();
  displayedColumns = ['asscd','memberno', 'gradenm','startymd', 'endymd', 'usegbn', 'point','updreason'];
  dataHistory = new MatTableDataSource();
  memberno: string = '';
  constructor(private customergradeService: CustomerGradeService,
    private spinnerService: NgxSpinnerService,
    public dialog: MatDialog,
    private _Toastr: ToastrService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any)
     {
        if(data) {
            this.memberno = data;
        }
    }
  
  ngOnInit() {
    this.getData(this.memberno);
    this.getDataHistory(this.memberno);
  }


  async getData(memberno:string) {
    this.spinnerService.show();
   
    this.customergradeService.GetCustomerGradeDetail(memberno).subscribe(res => {
      this.dataDetail = res[0];
      this.spinnerService.hide();
    })
  }

  async getDataHistory(memberno:string) {
    this.spinnerService.show();
   
    this.customergradeService.GetCustomerGradeHistory(memberno).subscribe(res => {
      this.dataHistory = res;
      this.spinnerService.hide();
    })
  }

  closeDialog(){
    this.dialogRef.close();
  }


}