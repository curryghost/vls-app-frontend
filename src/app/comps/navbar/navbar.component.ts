import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

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
    {name: "Signup", link: "#"}
  ]

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

  constructor(public state: StateService) { }

  ngOnInit(): void {
  }

}
