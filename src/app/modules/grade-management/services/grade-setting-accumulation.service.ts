import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/_services/api.service';
import { GradeSettingAccumulation } from '../models/grade-setting-accumulation.model';
@Injectable({ providedIn: 'root' })
export class GradeSettingAccumulationService {
    constructor(private apiService: ApiService) { }

    Get() {
        return this.apiService.get("GradeSettingAccumulation");
    }

    GetById(gradecd: string) {
        return this.apiService.get(`GradeSettingAccumulation/${gradecd}`);
    }

    Post(body: GradeSettingAccumulation) {
        return this.apiService.post("GradeSettingAccumulation",body);
    }

    Put(gradecd: string,body: GradeSettingAccumulation) {
        return this.apiService.put(`GradeSettingAccumulation/${gradecd}`,body);
    }

    Delete(gradecd: string, asscd: string) {
        return this.apiService.delete(`GradeSettingAccumulation/${gradecd}/${asscd}`);
    }
}