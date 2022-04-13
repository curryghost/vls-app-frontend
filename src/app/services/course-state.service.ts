import { Injectable } from '@angular/core';
import { Course } from '../model/course.model';
import { CourseService } from './course.service';

@Injectable({
  providedIn: 'root',
})
export class CourseStateService {
  courses: any;

  constructor(private courseService: CourseService) {}

  initialize() {
    this.courseService.getCourses().subscribe((res) => {
      this.courses = res;
    });
  }

  getDuration(course: Course) {
    const startDate = course.courseStart;
    const endDate = course.courseEnd;

    const startDateArr = startDate?.split(',')[0].split('-');
    console.log(startDateArr);
    const endDateArr = endDate?.split(',')[0].split('-');
    const startDateHours = new Date(startDateArr?[0], startDateArr?[1], startDateArr?[0])
  }

  getCourse(id: number) {
    return this.courses.find((key: any) => key.courseId == id);
  }
}
