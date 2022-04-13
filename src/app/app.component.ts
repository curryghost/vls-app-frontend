import { Component, OnInit } from '@angular/core';
import { CourseStateService } from './services/course-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'vls-app-frontend';

  constructor(private courseState: CourseStateService){}

  ngOnInit(): void {
    this.courseState.initialize();
  }
}
