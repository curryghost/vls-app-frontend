import { Injectable } from '@angular/core';
import { CourseService } from './course.service';

@Injectable({
  providedIn: 'root',
})
export class CourseStateService {
  course: any;

  constructor(private courseService: CourseService) {}

  initialize() {
    this.courseService.getCourses()
      .subscribe(res => {
        this.course = res;
      })
  }

  getCourse(id: number){
    return this.course.find((key: any) => key.courseId == id)
  }
}
