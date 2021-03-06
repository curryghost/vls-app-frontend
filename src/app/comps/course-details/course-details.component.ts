import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/model/course.model';
import { CourseStateService } from 'src/app/services/course-state.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit {
  course: Course | undefined;
  panelOpenState = false;
  constructor(
    public courseState: CourseStateService,
    private route: ActivatedRoute
  ) {
    console.log('constructor() has obtained the course state babyyy.');
  }

  //refactor code to display on refresh
  getCourse() {
    const routeParams = this.route.snapshot.paramMap;
    const courseIdFromFromRoute = Number(routeParams.get('id'));

    //fetches the product with the courseId in route
    return this.courseState.getCourse(courseIdFromFromRoute);
  }

  ngOnInit(): void {
    // const routeParams = this.route.snapshot.paramMap;
    // const courseIdFromFromRoute = Number(routeParams.get('id'));
    // //fetches the product with the courseId in route
    // this.course = this.courseState.getCourse(courseIdFromFromRoute)
  }
}
