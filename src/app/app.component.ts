import { Component, OnInit } from '@angular/core';
import { CourseStateService } from './services/course-state.service';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'vls-app-frontend';

  constructor(private courseState: CourseStateService, private state: StateService){}
  ngOnInit(): void {
    this.courseState.initialize();
  }
}
