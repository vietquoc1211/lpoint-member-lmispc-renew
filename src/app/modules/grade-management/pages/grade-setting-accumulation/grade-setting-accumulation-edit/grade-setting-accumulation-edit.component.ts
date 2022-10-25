import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MessageConstants } from 'src/app/core/_common/messageConstants';
import { GradeSettingAccumulation } from '../../../models/grade-setting-accumulation.model';
import {GradeSettingAccumulationService } from '../../../services/grade-setting-accumulation.service';
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
        public settingService: GradeSettingAccumulationService,
        private _Toastr: ToastrService,
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
            if(this.dataSetting.gradecd && this.action == "add")
            {
                this.settingService.Post(this.dataSetting).subscribe({
                    next: (response) => {
                        this.dialogRef.close(this.dataSetting);
                    },
                    error: (error) => {
                        this._Toastr.error('Có lỗi trong quá trình thêm mới!',error);
                    }
                });

            } else if (this.dataSetting.gradecd) {
                this.settingService.Put(this.dataSetting.gradecd,this.dataSetting).subscribe({
                    next: (response) => {
                        this.dialogRef.close(this.dataSetting);
                    },
                    error: (error) => {
                        this._Toastr.error('Có lỗi trong quá trình chỉnh sửa!',error);
                    }
                });       
            }
        }
    }
}