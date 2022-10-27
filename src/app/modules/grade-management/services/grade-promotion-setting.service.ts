import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/_services/api.service';
import { GradePromotionSetting } from '../models/grade-promotion-setting.model';
@Injectable({ providedIn: 'root' })
export class GradePromotionSettingService {
    constructor(private apiService: ApiService) { }

    Get() {
        return this.apiService.get("GradePromotionSetting");
    }

    GetByID(gradecd:string ,asscd: string) {
        return this.apiService.get(`GradePromotionSetting/${gradecd}/${asscd}`);
    }

    Post(settingData: GradePromotionSetting) {
        return this.apiService.post("GradePromotionSetting",settingData);
    }

    Put(asscd: string, settingData: GradePromotionSetting) {
        return this.apiService.put(`GradePromotionSetting/${asscd}`,settingData);
    }

    Delete(gradecd:string,asscd:string) {
        return this.apiService.delete(`GradePromotionSetting/${gradecd}/${asscd}`);
    }
}