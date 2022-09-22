import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/_services/api.service';


@Injectable({ providedIn: 'root' })
export class CustomerGradeService {
    constructor(private apiService: ApiService) { }

    getAll() 
    {
        return this.apiService.get("CustomerGrade/GetAll");
    }
}