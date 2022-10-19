import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
            this.gradeinfoService.Post(this.dataGrade).subscribe(res =>{
                // this.dataGrade = res;
                // this.dataSource = new MatTableDataSource(this.dataGrade);
                // this.dataSource.paginator = this.paginator;
              })
        }
    }
}