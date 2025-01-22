import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {

  constructor() { }

  isSigninUp = false;

  hasLoginError = false;
  loginErrorMessage = ""

  hasSignupError = false;
  signupErrors : String[] = [];
}
