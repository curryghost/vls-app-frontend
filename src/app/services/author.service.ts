import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from './apiString';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  // Daniel's api
<<<<<<< HEAD
  // baseUrl: string = 'http://localhost:5000/api/Author';
  baseUrl: string = 'http://localhost:32236/api/Author';
=======
  baseUrl: string = `${api}/author`;
  // baseUrl: string = 'http://localhost:32236/api/Author';
>>>>>>> d39dd13bd9bb42382a5a9cc2374dd9cb7d8af3f9

  constructor(private http: HttpClient) {}

  getAuthors() {
    return this.http.get(this.baseUrl + '/all');
  }

  getAuthorById(id: number) {
    return this.http.get(this.baseUrl + '/GetById' + id);
  }
}
