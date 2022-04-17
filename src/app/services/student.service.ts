import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { api } from './apiString';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  baseUrl: string = `${api}/student`;

  signUpStudent(formDetails: Object): Observable<HttpResponse<Object>> {
    return this.http.post<HttpResponse<Object>>(`${this.baseUrl}/register`, formDetails )
      .pipe(
        retry(3),
        catchError((err: HttpErrorResponse )=> {
          let errorMsg: string;
          if (err.status == 400){
            console.error(err)
            errorMsg = 'Unable to signup, user might already exist.'
          } else {
            console.error(err)
            errorMsg = "Something went wrong. Server might be down."
          }
          return throwError(() => new Error(errorMsg))
        })
      )
  }
}
