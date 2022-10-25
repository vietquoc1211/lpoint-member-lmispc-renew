import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MessageConstants } from 'src/app/core/_common/messageConstants';
import { GradeInfo } from '../../../models/grade-information.model';
import { GradeInfoService } from '../../../services/grade-information.service';

@Component({
    selector: "grade-infomation",
    templateUrl:'./grade-information-edit.component.html',
    styleUrls: ['./grade-information-edit.component.css']
})
export class GradeInfomationEditComponent {
    dataGrade: GradeInfo = new GradeInfo();
    action: string = 'view';
    constructor(
        private gradeinfoService: GradeInfoService,
        public dialogRef: MatDialogRef<any>,
        private _Toastr: ToastrService,
        @Inject(MAT_DIALOG_DATA) public data: any) {
            if(data.data) {
                this.dataGrade = data.data;
                this.dataGrade.ftpsend = data.data.ftpsend == 1 ? true : false;
                this.dataGrade.usegbn = data.data.usegbn == 1 ? true : false;
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
            this.gradeinfoService.Post(this.dataGrade).subscribe({
                next: (response) => {
                    this.dialogRef.close(this.dataGrade);
                },
                error: (error) => {
                }
            });    
        } else if (this.dataGrade.gradecd) {
            this.gradeinfoService.Put(this.dataGrade.gradecd,this.dataGrade).subscribe({
                next: (response) => {
                    this.dialogRef.close(this.dataGrade);
                },
                error: (error) => {
                }
            }); 
        }
    }
}