import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GradeInfo } from '../../../models/gradeinfo';

@Component({
    selector: "grade-infomation",
    templateUrl:'./grade-information-edit.component.html',
    styleUrls: ['./grade-information-edit.component.css']
})
export class GradeInfomationEditComponent {
    dataGrade: GradeInfo = new GradeInfo();
    action: string = 'view';
    constructor(
        public dialogRef: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
            if(data.data) {
                this.dataGrade = data.data;
            }
            this.action = data.action;
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