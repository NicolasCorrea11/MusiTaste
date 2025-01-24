import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../models/song';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient, private userService: UserService) { }

  Search(songName: string): Observable<Song[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userService.getToken()}`
    });
    return this.http.get<Song[]>(`https://musitastebackend.azurewebsites.net/api/SpotifyAPI/getByName?songName=${songName}`, { headers: headers})
  }
}
