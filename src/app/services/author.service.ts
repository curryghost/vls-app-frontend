import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from '../model/author.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  // Daniel's api
  baseUrl: string = 'http://localhost:32236/api/Author';

  constructor(private http: HttpClient) {}

  getAuthors() {
    return this.http.get(this.baseUrl + '/all');
  }

  getAuthorById(id: number) {
    return this.http.get(this.baseUrl + '/GetById' + id);
  }
}
