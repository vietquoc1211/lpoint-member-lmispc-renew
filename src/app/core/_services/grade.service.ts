import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class GradeService {
    constructor(private http: HttpClient) { }


    getAll() 
    {
        return this.http
            .post<any>(`${environment.apiUrl}/Grades/GetAll`, {
            })
            .pipe(
            );
    }
}