import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SongRequest } from '../models/song-request';
import { UserService } from './user.service';
import { Song } from '../models/song';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient, private userService: UserService) { 
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userService.getToken()}`
    });
  }

  headers : HttpHeaders;

  addSongToFavorites(song: Song): Observable<any> {
    let song2 : Song = {
      name: song.name,
      artist: song.artist,
      imageUrl: song.imageUrl
    }
    let uidstr = this.userService.getUserId();
    let uidint = parseInt(uidstr);
    let req : SongRequest = {
      userId: uidint,
      song: song2
    }
    return this.http.post("http://localhost:5292/api/Songs/AddFavorite", req, {headers: this.headers})
  }

  showUserFavorites(id : number): Observable<Song[]> {
    return this.http.get<Song[]>(`http://localhost:5292/api/Songs/GetFavorites?UserId=${id}`, {headers: this.headers});
  }

  deleteFromFavorites(song: Song) {
    let song2 : Song = {
      name: song.name,
      artist: song.artist,
      imageUrl: song.imageUrl
    }
    let uidstr = this.userService.getUserId();
    let uidint = parseInt(uidstr);
    let req : SongRequest = {
      userId: uidint,
      song: song2
    }
    return this.http.post("http://localhost:5292/api/Songs/DeleteFavorites", req, {headers: this.headers});
  }

}
