import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/_services/api.service';
import { GradeInfo } from '../models/grade-information.model';
@Injectable({ providedIn: 'root' })
export class GradeInfoService {
    constructor(private apiService: ApiService) { }

    Get() {
        return this.apiService.get("GradeInfo");
    }

    GetById(gradecd: string) {
        return this.apiService.get(`GradeInfo/${gradecd}`);
    }

    Post(body: GradeInfo) {
        return this.apiService.post("GradeInfo",body);
    }

    Put(gradecd: string,body: GradeInfo) {
        return this.apiService.put(`GradeInfo/${gradecd}`,body);
    }

    Delete(gradecd: string) {
        return this.apiService.delete(`GradeInfo/${gradecd}`);
    }
}