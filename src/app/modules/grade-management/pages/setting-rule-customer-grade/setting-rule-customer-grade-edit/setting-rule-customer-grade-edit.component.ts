import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SettingRuleCustomerGrade } from '../../../models/setting-rule-customer-grade.model';

@Component({
    selector: "setting-rule-customer-grade",
    templateUrl:'./setting-rule-customer-grade-edit.component.html',
    styleUrls: ['./setting-rule-customer-grade-edit.component.css']
})
export class SettingRuleCustomerGradeEditComponent {
    dataGrade: SettingRuleCustomerGrade = new SettingRuleCustomerGrade();
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