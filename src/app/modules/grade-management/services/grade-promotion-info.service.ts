import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/_services/api.service';
import { GradePromotionInfo } from '../models/grade-promotion-info.model';
@Injectable({ providedIn: 'root' })
export class GradePromotionInfoService {
    constructor(private apiService: ApiService) { }

    Get() {
        return this.apiService.get("GradePromotionInfo");
    }

    GetByID(gradecd: string,asscd: string) {
        return this.apiService.get(`GradePromotionInfo/${gradecd}/${asscd}`);
    }

    Post(settingData: GradePromotionInfo) {
        return this.apiService.post("GradePromotionInfo",settingData);
    }

    Put(asscd: string, settingData: GradePromotionInfo) {
        return this.apiService.put(`GradePromotionInfo/${asscd}`,settingData);
    }

    Delete(gradecd: string,asscd: string) {
        return this.apiService.delete(`GradePromotionInfo/${gradecd}/${asscd}`);
    }
}