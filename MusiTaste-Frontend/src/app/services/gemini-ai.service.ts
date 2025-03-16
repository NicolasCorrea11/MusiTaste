import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prompt } from '../models/prompt';
import { Observable } from 'rxjs';
import { Song } from '../models/song';
import { response } from 'express';
import { AiResponse } from '../models/ai-response';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class GeminiAiService {

  constructor(private http: HttpClient, private userService: UserService) { }

  generateProfile(songs : Song[]): Observable<AiResponse> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userService.getToken()}`
    });
    return this.http.post<AiResponse>("https://{your-localhost}/api/GeminiAI", songs, {headers: headers}); 
  }
}
