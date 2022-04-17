import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StateService } from 'src/app/services/state.service';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { CourseStateService } from 'src/app/services/course-state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // Set Nav links here
  links = [
    { name: 'Home', link: '/' },
    { name: 'My Courses', link: '#' },
  ];

  searchValue: any;
  courses: any;
  name!: string;
  selectedFilter = 'course';
  dropdownIcon = 'arrow_right';

  constructor(
    public state: StateService,
    public dialog: MatDialog,
    public courseState: CourseStateService
  ) {}

  ngOnInit(): void {}
  //Too distracted with this shit
  toggleDrawer(el: Element, $event: any) {
    const body = document.getElementsByTagName('body').item(0);
    el.classList.toggle('expand');
    $event.stopPropagation();
    body?.addEventListener('click', function clickListener() {
      el.classList.toggle('expand');
      body.removeEventListener('click', clickListener);
    });
  }

  openSignUp() {
    const signUpRef = this.dialog.open(SignUpComponent, {
      data: { name: this.name },
    });
  }
  // how to get the search value and search through courses and courses.author?/???
  // this.courseState.filterQuery(searchValue)
}
