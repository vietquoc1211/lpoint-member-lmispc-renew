import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/_services/api.service';


@Injectable({ providedIn: 'root' })
export class CustomerGradeService {
    constructor(private apiService: ApiService) { }

    GetAllCustomerGradeList(pageNo:any,pageSize:any,sortOrder:any) : Observable<any>
    {
        return this.apiService.get(`CustomerGrade/GetAllCustomerGradeList?pageNo=${pageNo}&pageSize=${pageSize}&sortOrder=${sortOrder}`);
    }
}