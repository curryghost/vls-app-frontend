import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  constructor() { }

  ngOnInit(): void {
  }

  get name(){
    return this.loginForm.get('name')
  }
  get password(){
    return this.loginForm.get('password')
  }

  onSubmit(){
    // To call service

    this.loginForm.reset();
  }
}
