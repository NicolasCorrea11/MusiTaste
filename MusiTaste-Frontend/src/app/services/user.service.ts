import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../models/user';
import { Credentials } from '../models/credentials';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  myApiUrl = "https://musitastebackend.azurewebsites.net"

  signup(user: Credentials): Observable<any> {
    return this.http.post(`${this.myApiUrl}/api/Users/signup`, user);
  }

  login(user: Credentials): Observable<any> {
    return this.http.post(`${this.myApiUrl}/api/Users/login`, user);
  }

  setToken(token: string): void {
    this.cookieService.set("token", token);
  }

  setUserId(id : string): void {
    this.cookieService.set("id", id);
  }

  getToken(): string {
    return this.cookieService.get("token");
  }

  getUserId(): string {
    return this.cookieService.get("id");
  }

  removeToken(): void {
    this.cookieService.delete("token");
  }
  
  removeUserId(): void {
    this.cookieService.delete("id");
  }

  isLogged(): boolean {
    let tk = this.getToken();
    if (tk) {
      return true;
    }
    else {
      return false;
    }
  }

}
