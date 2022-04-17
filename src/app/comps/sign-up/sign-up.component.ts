import { Component, OnInit, Optional } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  error = null;
  pending = false;

  constructor(
    @Optional() public signUpRef: MatDialogRef<SignUpComponent>, 
    private fb: FormBuilder,
    private studentService: StudentService) { }

  ngOnInit(): void {
  }

  signUpForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    userName: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    number: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(5)]],
    verifyPassword: ['', [Validators.required, this.verifyPasswordValidator]]
  })

  get name(){ return this.signUpForm.get('name');}
  get userName(){ return this.signUpForm.get('userName');}
  get email(){ return this.signUpForm.get('email');}
  get number(){ return this.signUpForm.get('number');}
  get password(){ return this.signUpForm.get('password');}
  get verifyPassword(){ return this.signUpForm.get('verifyPassword');}

    verifyPasswordValidator(control: AbstractControl){
      if (control.value != control.parent?.get('password')?.value)
        return {verifyPassword: {value: control.value}}
      return null
    }

  handleSignUp(){
    const details = {...this.signUpForm.value};
    delete details['verifyPassword'];
    this.pending = true
    this.studentService.signUpStudent(details).subscribe({
      next: (res: any) => {console.log(res); localStorage.setItem('jwtToken', res.token)},
      error: (err) => { this.error = err; this.pending = false; },
      complete: () => {this.pending = false; this.signUpRef.close()},
    })
  }
  
}
