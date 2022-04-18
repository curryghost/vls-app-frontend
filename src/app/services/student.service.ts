import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { api } from './apiString';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  baseUrl: string = `${api}/student`;

  signUp(formDetails: Object): Observable<HttpResponse<Object>> {
    return this.http
      .post<HttpResponse<Object>>(`${this.baseUrl}/register`, formDetails)
      .pipe(
        retry(3),
        catchError((err: HttpErrorResponse) => {
          let errorMsg: string;
          if (err.status == 400) {
            errorMsg = 'Unable to signup, user might already exist.';
          } else {
            errorMsg = 'Something went wrong. Server might be down.';
          }
          return throwError(() => new Error(errorMsg));
        })
      );
  }

  login(loginDetails: Object){
    return this.http.post(`${this.baseUrl}/login`, loginDetails)
      .pipe(
        retry(3),
        catchError((err: HttpErrorResponse) => {
          let errorMsg: string;
          if (err.status == 401) {
            errorMsg = "You got the wrong password or user name"
          } else {
            errorMsg = "Something went wrong. Server might be down"
          }
          return throwError(() => new Error(errorMsg))
        })
      )
  }
}
