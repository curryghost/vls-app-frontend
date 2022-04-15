import { Component, OnInit } from '@angular/core';
import { CourseStateService } from 'src/app/services/course-state.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  constructor(public courseState: CourseStateService) {}

  ngOnInit(): void {}

  finalFilteredCourses() {
    if (this.courseState.filteredCourses.length === 0)
      return this.courseState.courses;
    return this.courseState.filteredCourses;
  }
}
