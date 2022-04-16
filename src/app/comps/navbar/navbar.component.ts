import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StateService } from 'src/app/services/state.service';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // Set Nav links here
  links = [
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
}
