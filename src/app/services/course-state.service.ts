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
    const endDateArr = endDate?.split(',')[0].split('-');

    const [dayS, monthS, yearS] = startDateArr!;
    const startDateMinutes = new Date(+yearS, +monthS, +dayS).getTime();
    const [dayE, monthE, yearE] = endDateArr!;
    const endDateMinutes = new Date(+yearE, +monthE, +dayE).getTime();

    const durationHours =
      (endDateMinutes - startDateMinutes) / 1000 / 60 / 60 / 24;
    return durationHours;
  }

  getCourse(id: number) {
    return this.courses.find((key: any) => key.courseId == id);
  }
}
