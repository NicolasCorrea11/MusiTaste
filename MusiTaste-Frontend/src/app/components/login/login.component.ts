import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { Credentials } from '../../models/credentials';
import { GlobalVariablesService } from '../../services/global-variables.service';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  constructor(private userService: UserService, private router: Router, protected global: GlobalVariablesService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username : ['', [Validators.required, Validators.minLength(6)]],
      password : ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  loginForm : FormGroup;

  login() {
    if (this.loginForm.invalid){
      this.global.hasLoginError = true;
      this.global.loginErrorMessage = 'User not found';
      return;
    }
    const user: Credentials = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };
    this.userService.login(user).subscribe((response : User) => {
      if (response != null) {
        this.userService.setUserId(response.id.toString()); 
        this.userService.setToken(response.token);
        this.global.hasLoginError = false;
        this.global.loginErrorMessage = "";
        this.router.navigateByUrl('main');
      }
    }, (error : HttpErrorResponse) => {
      this.global.hasLoginError = true;
      this.global.loginErrorMessage = error.error.message;
    });
  }
}
