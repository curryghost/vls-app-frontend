import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StateService } from 'src/app/services/state.service';
<<<<<<< HEAD
import { SignUpComponent } from '../sign-up/sign-up.component';
=======
import { CourseStateService } from 'src/app/services/course-state.service';
import { Course } from 'src/app/model/course.model';
import { CourseService } from 'src/app/services/course.service';
>>>>>>> 2e53d3626190771bc9523409e40675b0fc12c402

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // Set Nav links here
  links = [
<<<<<<< HEAD
    {name: "Home", link: "/"},
    {name: "Courses", link: "#"},
  ]
  constructor(public state: StateService, public dialog: MatDialog ) { }
  name!: string;

  ngOnInit(): void {
  }
  //Too distracted with this shit
  toggleDrawer(el: Element, $event: any){
    const body = document.getElementsByTagName("body").item(0)
    el.classList.toggle("expand");
    $event.stopPropagation();
      body?.addEventListener('click', function clickListener() {
        el.classList.toggle("expand");
        body.removeEventListener('click', clickListener)
      })
    }

  openSignUp(){
    const signUpRef = this.dialog.open(SignUpComponent, {
      data: {name: this.name}
    });
  }
=======
    { name: 'Home', link: '/' },
    { name: 'My Courses', link: '#' },
    { name: 'My Instructors', link: '#' },
  ];

  searchValue: any;
  courses: any;

  constructor(
    public state: StateService,
    private courseService: CourseService,
    public courseState: CourseStateService
  ) {
    this.courseService.getCourses().subscribe((res) => {
      this.courses = res;
      console.log(res);
    });
  }

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

  // how to get the search value and search through courses and courses.author?/???
  // this.courseState.filterQuery(searchValue)

  ngOnInit(): void {}
>>>>>>> 2e53d3626190771bc9523409e40675b0fc12c402
}
