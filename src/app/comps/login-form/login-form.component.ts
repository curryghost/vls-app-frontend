import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  constructor(private student: StudentService, private router: Router, ) { }

  ngOnInit(): void {
  }
  errorMsg = ''
  pending = false

  get userName(){
    return this.loginForm.get('userName')
  }
  get password(){
    return this.loginForm.get('password')
  }

  onSubmit(){
    // To call service
    this.pending = true
    console.log(this.loginForm.value)
    this.student.login(this.loginForm.value).subscribe({
      next: (res: any) => localStorage.setItem('jwtToken', res.token),
      error: (err) => { this.errorMsg = err.message; this.pending = false },
      complete: () => {this.pending = false; this.router.navigate(['/'])}
    }
    )

    this.loginForm.reset();
  }
}
