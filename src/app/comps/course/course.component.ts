import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseStateService } from 'src/app/services/course-state.service';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  constructor(public courseState: CourseStateService, private router: Router) {}

  ngOnInit(): void {
    // this.courseService.getCourses().subscribe((courses: Courses[]) => {
    //   this.courses = courses;
    // });
  }
}

//hallo alif
// this.service.getCourses();
