import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MessageConstants } from 'src/app/core/_common/messageConstants';
import { GradePromotionSetting } from '../../../models/grade-promotion-setting.model';
import { GradePromotionSettingService } from '../../../services/grade-promotion-setting.service';

@Component({
    selector: "grade-promotion-setting",
    templateUrl:'./grade-promotion-setting-edit.component.html',
    styleUrls: ['./grade-promotion-setting-edit.component.css']
})
export class GradePromotionSettingEditComponent {
    dataGrade: GradePromotionSetting = new GradePromotionSetting();
    action: string = 'view';
    constructor(
        private gradeService: GradePromotionSettingService,
        public dialogRef: MatDialogRef<any>,
        private _Toastr: ToastrService,
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
        if(this.dataGrade.gradecd && this.action == "add")
        {
            this.gradeService.Post(this.dataGrade).subscribe({
                next: (response) => {
                    this.dialogRef.close(this.dataGrade);
                },
                error: (error) => {
                    this._Toastr.error('Thông tin đã tồn tại không thể thêm mới.');
                }
            });    
        } else if (this.dataGrade.gradecd) {
            this.gradeService.Put(this.dataGrade.gradecd,this.dataGrade).subscribe({
                next: (response) => {
                    this.dialogRef.close(this.dataGrade);
                },
                error: (error) => {
                    this._Toastr.error('Không cập nhật được thông tin!');
                }
            }); 
        }
    }
}