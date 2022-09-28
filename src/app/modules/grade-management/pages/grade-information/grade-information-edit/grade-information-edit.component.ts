import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: "grade-infomation",
    templateUrl:'./grade-information-edit.component.html',
    styleUrls: ['./grade-information-edit.component.css']
})
export class GradeInfomationEditComponent {
    dataGrade: any;
    onEdit: boolean = false;
    constructor(
        public dialogRef: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
            this.dataGrade = data.data;
            this.onEdit = data.onEdit;
    }

    closeDialog(){
        // Write your stuff here
        this.dialogRef.close(); // <- Close the mat dialog
      }
}