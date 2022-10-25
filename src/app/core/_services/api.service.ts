import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MessageConstants } from '../_common/messageConstants';
import { UrlConstants } from '../_common/UrlConstants';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  
  constructor(private httpClient: HttpClient,
    private _router: Router,
    private _Toastr: ToastrService) {
      
  }
  public get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient.get(UrlConstants.BASE_URL + path, { params }).pipe(catchError(this.formatErrors));
  }

  public put(path: string, body: object = {}): Observable<any> {
    return this.httpClient
      .put(UrlConstants.BASE_URL + path, JSON.stringify(body), this.options)
      .pipe(catchError(this.formatErrors));
  }

  public post(path: string, body: object = {}): Observable<any> {
    return this.httpClient
      .post(UrlConstants.BASE_URL + path, JSON.stringify(body), this.options)
      .pipe(catchError(this.formatErrors));
  }

  public delete(path: string): Observable<any> {
    return this.httpClient.delete(UrlConstants.BASE_URL + path).pipe(catchError(this.formatErrors));
  }

  public formatErrors(error: any): Observable<any> {
    return throwError(error.error);
  }

  public handleError(error: any, el?: string) {
    if (error.status == 404) {
      this._Toastr.error(MessageConstants.API404);
      return;
    }
    if (error.status === 401) {
      // clearTimeout(this.login_mess);
      // this.login_mess = setTimeout(() => {
      //   this._Toastr.error(MessageConstants.LOGIN_AGAIN_MSG);
      // }, 400);
      // this._Login.logout();
      this._router.navigate(['/authentication/login']);
      return;
    }
    if (error.status === 400) {
      let errMsg = '';
      try {
        const dummy = error.error || error.Message;
        if (Array.isArray(dummy)) {
          errMsg = dummy.join('</br>');
        } else {
          errMsg = dummy;
        }
      } catch (Error) {
      }
      try {
        if (!errMsg || 0 === errMsg.length) {
          errMsg = error._body;
        }
        if (errMsg.startsWith('"') && errMsg.endsWith('"')) {
          errMsg = errMsg.slice(1, -1);
        }
      } catch (Error) {
      }
      if (errMsg !== '') {
        this._Toastr.error(errMsg);
      } else {
        this._Toastr.error(MessageConstants.MS400);
      }
    } else if (error.status === 406) {
      return;
    } else if (error.status === 404) {
      this._router.navigate(['/page-404']);
    } else if (error.status === 405) {
      this._Toastr.error(MessageConstants.KHONGDUOCPHEP);
    } else if (error.status === 409) {
      this._Toastr.error(MessageConstants.CONFLICT_MSG);
    } else if (error.status === 0 || error.status === 500) {
      try {
        // có thông báo từ server trả về
        const str = error.error || error.Message;
        if (typeof str == 'string') {
          const from = str.indexOf('"ExceptionMessage":"') + 20;
          const to = str.indexOf('","ExceptionType":');
          const ms = str.substring(from, to);
          this._Toastr.error(ms);
        }
        else if (typeof str == 'object') {
          
          if(str.ExceptionMessage)
            this._Toastr.error(MessageConstants.SERVE_ERROR_MSG);
          else
            this._Toastr.error(str.ExceptionMessage);
        }
      } catch (Error) {
        this._Toastr.error(MessageConstants.SERVE_ERROR_MSG);
      }
    } else {
      const errMsg = JSON.parse(error._body || '{}').error || '';
      if (errMsg.length > 0) {
        this._Toastr.error(errMsg);
        return errMsg;
      }
    }
  }
}
