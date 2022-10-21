import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CustomerGrade } from "../../models/customer-grade.model";
import { CustomerGradeService } from '../../services/customer-grade.service';
@Component({
    selector: 'customer-grade-edit',
    templateUrl: './customer-grade-edit.component.html',
    styleUrls: ['./customer-grade-edit.component.css']
})
export class CustomerGradeEditComponent {
    dataGrade: CustomerGrade = new CustomerGrade();
    action: string = 'view';

    constructor(
        public dialogRef: MatDialogRef<any>,
        private gradeService: CustomerGradeService,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        if(data.data) {
            this.dataGrade = data.data;
        }
        this.action = data.action;
    }

    closeDialog(){
        this.dialogRef.close();
    }

    onSave() {
        if(this.dataGrade)
        {
            if(this.dataGrade.gradecd && this.action == "add")
            {
                this.gradeService.Post(this.dataGrade).subscribe(res =>{
                    this.dialogRef.close(this.dataGrade);
                });
            } else if (this.dataGrade.memberno) {
                this.gradeService.Put(this.dataGrade.memberno,this.dataGrade).subscribe(res =>{
                    this.dialogRef.close(this.dataGrade);
                },error => {
                    this.dialogRef.close(error);
                });
            }
        }
    }
}