import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { LoginComponent } from "../login/login.component";
import { SignupComponent } from "../signup/signup.component";
import { CommonModule } from '@angular/common';
import { GlobalVariablesService } from '../../services/global-variables.service';

@Component({
  selector: 'app-landing',
  imports: [LoginComponent, SignupComponent,CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit{
  
  constructor(private userService: UserService, private router: Router, protected global: GlobalVariablesService) {}

  ngOnInit(): void {
    if (this.userService.isLogged()) {
      this.router.navigateByUrl('main');
    }
  }

}
