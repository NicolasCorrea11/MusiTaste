import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MainPageComponent } from "./components/main-page/main-page.component";
import { LoginComponent } from "./components/login/login.component";
import { LandingComponent } from "./components/landing/landing.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(protected router: Router) {}
  title = 'Frontend';
}
