﻿import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/_services/api.service';
@Injectable({ providedIn: 'root' })
export class GradeSettingAccumulationService {
    constructor(private apiService: ApiService) { }

    getAll() 
    {
        return this.apiService.get("GradeSettingAccumulation/GetAll");
    }
}