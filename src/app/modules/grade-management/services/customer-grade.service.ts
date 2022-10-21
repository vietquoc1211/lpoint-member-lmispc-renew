import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/_services/api.service';
import { CustomerGrade } from '../models/customer-grade.model';


@Injectable({ providedIn: 'root' })
export class CustomerGradeService {
    constructor(private apiService: ApiService) { }

    GetAll(pageNo:any,pageSize:any,sortOrder:any) : Observable<any>
    {
        return this.apiService.get(`CustomerGrade/GetAll?pageNo=${pageNo}&pageSize=${pageSize}&sortOrder=${sortOrder}`);
    }

    ExportList() : Observable<any>
    {
        return this.apiService.get(`CustomerGrade/ExportList`);
    }

    GetById(memberno: string) {
        return this.apiService.get(`CustomerGrade/${memberno}`);
    }

    Post(body: CustomerGrade) {
        return this.apiService.post("CustomerGrade",body);
    }

    Put(memberno: string,body: CustomerGrade) {
        return this.apiService.put(`CustomerGrade/${memberno}`,body);
    }

    Delete(memberno: string) {
        return this.apiService.delete(`CustomerGrade/${memberno}`);
    }
}