import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/_services/api.service';
import { SettingRuleCustomerGrade } from '../models/setting-rule-customer-grade.model';
@Injectable({ providedIn: 'root' })
export class SettingRuleCustomerGradeService {
    constructor(private apiService: ApiService) { }

    Get() {
        return this.apiService.get("SettingRuleCustomerGrade");
    }

    GetByID(asscd: string) {
        return this.apiService.get(`SettingRuleCustomerGrade/${asscd}`);
    }

    Post(settingData: SettingRuleCustomerGrade) {
        return this.apiService.post("SettingRuleCustomerGrade",settingData);
    }

    Put(asscd: string, settingData: SettingRuleCustomerGrade) {
        return this.apiService.put(`SettingRuleCustomerGrade/${asscd}`,settingData);
    }

    Delete(asscd:string) {
        return this.apiService.delete(`SettingRuleCustomerGrade/${asscd}`);
    }
}