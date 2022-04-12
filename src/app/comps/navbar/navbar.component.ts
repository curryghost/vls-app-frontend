import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  links = [
    {name: "Home", link: "/"},
    {name: "Courses", link: "#"},
    {name: "Signup", link: "#"}
  ]


  constructor(public state: StateService) { }

  ngOnInit(): void {
  }

}
