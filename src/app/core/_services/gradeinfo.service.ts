﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class GradeInfoService {
    constructor(private http: HttpClient) { }


    getAll() 
    {
        return this.http
            .post<any>(`${environment.apiUrl}/GradeInfo/GetAll`, {
            })
            .pipe(
            );
    }
}