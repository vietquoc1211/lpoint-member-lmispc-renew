import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/_services/api.service';
import { CustomerGrade, CustomerGradeSearch } from '../models/customer-grade.model';


@Injectable({ providedIn: 'root' })
export class CustomerGradeService {
    constructor(private apiService: ApiService) { }

    GetAll(body: CustomerGradeSearch) : Observable<any>
    {
        return this.apiService.post(`CustomerGrade/GetAll`,body);
    }

    ExportList(body: CustomerGradeSearch) : Observable<any>
    {
        return this.apiService.post(`CustomerGrade/ExportList`,body);
    }

    GetCustomerGradeDetail(memberno: string) {
        return this.apiService.get(`CustomerGrade/CustomerGradeDetail/${memberno}`);
    }

    GetCustomerGradeHistory(memberno: string) {
        return this.apiService.get(`CustomerGrade/CustomerGradeHistory/${memberno}`);
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