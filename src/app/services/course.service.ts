import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from './apiString';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  baseUrl: string = `${api}/course`;
  // baseUrl: string = 'http://localhost:32236/api/Course';

  constructor(private http: HttpClient) {}

  getCourses() {
    return this.http.get(this.baseUrl + '/all');
  }

  getCourseById(id: number) {
    return this.http.get(this.baseUrl + '/GetById/' + id);
  }

  // fetching the Course from the CourseList Component and posting it to the web api.
  // createCourse(Course: Course) {
  //   return this.http.post(this.baseUrl,Course);
  // }
  // http://localhost:26651/api/Course?id=2
  // updateCourse(Course: Course) {
  //   return this.http.put(this.baseUrl + '?id=' + Course.id, Course);
  // }

  // http://localhost:26651/api/Course?id=2
  // deleteCourse(id: number) {
  //   return this.http.delete(this.baseUrl + '?id=' + id);
  // }
}
