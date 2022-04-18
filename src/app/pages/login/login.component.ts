import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserStateService } from 'src/app/services/user-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, public user: UserStateService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    if (this.user.isLogin) {
      this.route.navigate(['/'])
      this.snackbar.open('You are still login', 'close', {duration: 2000})
    }
  }

}
