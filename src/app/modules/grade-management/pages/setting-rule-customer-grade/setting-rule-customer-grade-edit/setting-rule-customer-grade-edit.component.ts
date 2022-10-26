import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { SettingRuleCustomerGrade } from '../../../models/setting-rule-customer-grade.model';
import { SettingRuleCustomerGradeService } from '../../../services/setting-rule-customer-grade.service';

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
        private _Toastr: ToastrService,
        private settingRuleService: SettingRuleCustomerGradeService,
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
            if(this.dataGrade)
            {
                if(this.dataGrade.asscd && this.action == "add")
                {
                    this.settingRuleService.Post(this.dataGrade).subscribe({
                        next: (response) => {
                            this.dialogRef.close(this.dataGrade);
                        },
                        error: (error) => {
                            this._Toastr.error('Có lỗi trong quá trình thêm mới!',error);
                        }
                    });
    
                } else if (this.dataGrade.asscd) {
                    this.settingRuleService.Put(this.dataGrade.asscd,this.dataGrade).subscribe({
                        next: (response) => {
                            this.dialogRef.close(this.dataGrade);
                        },
                        error: (error) => {
                            this._Toastr.error('Có lỗi trong quá trình chỉnh sửa!',error);
                        }
                    });       
                }
            }
        }
    }
}