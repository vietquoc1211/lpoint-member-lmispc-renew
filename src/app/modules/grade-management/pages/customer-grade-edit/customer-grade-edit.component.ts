import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CustomerGrade } from "../../models/customer-grade.model";
@Component({
    selector: 'customer-grade-edit',
    templateUrl: './customer-grade-edit.component.html',
    styleUrls: ['./customer-grade-edit.component.css']
})
export class CustomerGradeEditComponent {
    dataGrade: CustomerGrade = new CustomerGrade();
    constructor(
        public dialogRef: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        if(data.data) {
            this.dataGrade = data.data;
        }
    }

    closeDialog(){
        // Write your stuff here
        this.dialogRef.close(); // <- Close the mat dialog
    }

    onSave() {
        if(this.dataGrade)
        {

        }
    }
}