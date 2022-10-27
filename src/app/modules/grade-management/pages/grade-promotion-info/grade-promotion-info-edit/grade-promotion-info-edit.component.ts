import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MessageConstants } from 'src/app/core/_common/messageConstants';
import { GradePromotionInfo } from '../../../models/grade-promotion-info.model';
import { GradePromotionInfoService } from '../../../services/grade-promotion-info.service';

@Component({
    selector: "grade-promotion-info",
    templateUrl:'./grade-promotion-info-edit.component.html',
    styleUrls: ['./grade-promotion-info-edit.component.css']
})
export class GradePromotionInfoEditComponent {
    dataGrade: GradePromotionInfo = new GradePromotionInfo();
    action: string = 'view';
    constructor(
        private gradeService: GradePromotionInfoService,
        public dialogRef: MatDialogRef<any>,
        private _Toastr: ToastrService,
        @Inject(MAT_DIALOG_DATA) public data: any) {
            if(data.data) {
                this.dataGrade = data.data;
                this.dataGrade.accumulate_point = data.data.accumulate_point == 1 ? true : false;
                this.dataGrade.discount = data.data.discount == 1 ? true : false;
                this.dataGrade.status = data.data.status == 1 ? true : false;
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
                }
            });    
        } else if (this.dataGrade.gradecd) {
            this.gradeService.Put(this.dataGrade.gradecd,this.dataGrade).subscribe({
                next: (response) => {
                    this.dialogRef.close(this.dataGrade);
                },
                error: (error) => {
                }
            }); 
        }
    }
}