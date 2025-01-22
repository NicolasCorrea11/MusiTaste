import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
    {path: 'main', component: MainPageComponent},
    {path: '', component: LandingComponent},
];
