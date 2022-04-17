import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserStateService } from 'src/app/services/user-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public user: UserStateService, public helper: JwtHelperService) { }

  ngOnInit(): void {
    console.log(this.helper.decodeToken(localStorage.getItem('jwtToken')!))
  }

}
