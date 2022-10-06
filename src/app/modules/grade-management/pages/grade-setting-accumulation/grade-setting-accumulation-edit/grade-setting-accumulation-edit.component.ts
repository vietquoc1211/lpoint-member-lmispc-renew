import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GradeSettingAccumulation } from '../../../models/grade-setting-accumulation.model';

@Component({
    selector: "grade-infomation",
    templateUrl:'./grade-setting-accumulation-edit.component.html',
    styleUrls: ['./grade-setting-accumulation-edit.component.css']
})
export class GradeSettingAccumulationEditComponent {
    dataSetting: GradeSettingAccumulation = new GradeSettingAccumulation();
    action: string = 'view';
    constructor(
        public dialogRef: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
            if(data.data) {
                this.dataSetting = data.data;
            }
            this.action = data.action;
    }

    closeDialog(){
        // Write your stuff here
        this.dialogRef.close(); // <- Close the mat dialog
    }

    onSave() {
        if(this.dataSetting)
        {

        }
    }
}