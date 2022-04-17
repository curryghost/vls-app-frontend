import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StateService } from 'src/app/services/state.service';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { CourseStateService } from 'src/app/services/course-state.service';
import { UserStateService } from 'src/app/services/user-state.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // Set Nav links here
  links = [
    { name: 'Home', link: '/' },
    { name: 'My Courses', link: '/my-courses' },
  ];

  searchValue: any;
  courses: any;
  name!: string;
  selectedFilter = 'course';
  dropdownIcon = 'arrow_right';

  constructor(
    public state: StateService,
    public dialog: MatDialog,
    public courseState: CourseStateService,
    public user: UserStateService,
    private router: Router,
    private snackBar: MatSnackBar
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

  logoutHandler() {
    localStorage.clear();
    this.router.navigate(['/']);
    this.snackBar.open('You are logout', 'close', { duration: 2000 });
  }

  openSignUp() {
    const signUpRef = this.dialog.open(SignUpComponent, {
      data: { name: this.name },
    });
  }
  // how to get the search value and search through courses and courses.author?/???
  // this.courseState.filterQuery(searchValue)
}
