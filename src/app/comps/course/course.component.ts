import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course.model';
import { CourseStateService } from 'src/app/services/course-state.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  constructor(public courseState: CourseStateService) {

  }

  ngOnInit(): void {
  }
}
