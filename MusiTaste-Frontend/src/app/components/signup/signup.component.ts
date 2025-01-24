import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Credentials } from '../../models/credentials';
import { LandingComponent } from '../landing/landing.component';
import { GlobalVariablesService } from '../../services/global-variables.service';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  
  constructor(private userService: UserService, private router: Router, protected global : GlobalVariablesService, private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      username : ['', [Validators.required, Validators.minLength(6)]],
      password : ['', [Validators.required, Validators.minLength(6), Validators.pattern(this.StrongPasswordRegx)]]
    })
  }

  protected userInputError = false;
  protected passwordInputError = false;

  StrongPasswordRegx: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;
  signupForm : FormGroup;

  signup() {
    this.userInputError = false;
    this.passwordInputError = false;
    this.global.signupErrors = [];
    if (this.signupForm.invalid) {
      this.global.hasSignupError = true;
      if (this.signupForm.get('username')?.invalid) {
        this.global.signupErrors.push("Username must be at least 6 characters long");
        this.userInputError = true;
      }
      if (this.signupForm.get('password')?.invalid) {
        this.global.signupErrors.push("Password must be at least 6 characters long, have one uppercase letter, one lowercase letter, one digit and one special character");
        this.passwordInputError = true;
      }
      return;
    }
    const user: Credentials = {
      username: this.signupForm.value.username,
      password: this.signupForm.value.password
    };
    this.userService.signup(user).subscribe( data => {
        this.global.isSigninUp = false;
        this.global.hasSignupError = false;
        this.global.signupErrors = [];
      }, (error : HttpErrorResponse) => {
        this.global.hasSignupError = true;
        this.global.signupErrors.push(error.error.message);
      }
    );
  }
}
