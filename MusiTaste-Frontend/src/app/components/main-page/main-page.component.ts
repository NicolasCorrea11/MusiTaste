import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { SpotifyService } from '../../services/spotify.service';
import { Song } from '../../models/song';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "../login/login.component";
import { UserService } from '../../services/user.service';
import { SongService } from '../../services/song.service';
import { Router } from '@angular/router';
import { GeminiAiService } from '../../services/gemini-ai.service';
import { AiResponse } from '../../models/ai-response';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  imports: [FormsModule, CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit{

  constructor(private spotifyService: SpotifyService, protected userService: UserService, private songService: SongService, private router: Router, private geminiAiService: GeminiAiService) {}

  hasGenerated = false;
  hasSearched = false;
  songName = "";
  trackList : Song[] = [];
  favList : Song[] = [];
  geminiError = "";

  suggestions : String[] = [];
  tastes : String[] = [];

  generatedProfile = "";
  generatedTastes : String[] = [];
  generatedSuggestions : String[] = [];

  searchSong() {
    if (this.songName == "") {
      return
    }
    this.spotifyService.Search(this.songName).subscribe(data => this.trackList = data);
    this.hasSearched = true;
  }

  addToFavorites(song: Song) {
    this.songService.addSongToFavorites(song).subscribe();
    setTimeout(() => {
      this.UpdateUserFavorites(); 
    }, 800
    );
  }

  UpdateUserFavorites() {
    let uidstr = this.userService.getUserId();
    let uidint = parseInt(uidstr);
    this.songService.showUserFavorites(uidint).subscribe((data) => {
      this.favList = data; 
  });
  }

  logout() {
    this.userService.removeToken();
    this.userService.removeUserId();
    this.router.navigateByUrl('');
  }

  ngOnInit(): void {
    if (!this.userService.isLogged()) {
      this.router.navigateByUrl('');
    }
    setTimeout(() => {
      this.UpdateUserFavorites(); 
    }, 500
    );
  }

  generateProfile() {
    this.geminiAiService.generateProfile(this.favList).subscribe((data : AiResponse) => {
      console.log(data.aiResponse)
      this.generatedProfile = data.aiResponse.split(".")[0];
      console.log(this.generatedProfile);
      this.tastes = data.aiResponse.split(".")[1].split(",");
      console.log(this.generatedSuggestions);
      this.suggestions = data.aiResponse.split(".")[2].split(",");
      console.log(this.generatedTastes);
    }, error => {
      this.geminiError = error.error.errorMessage;
    });
    this.hasGenerated = true;
  }

  async deleteFromFavorites(song: Song) {
    this.songService.deleteFromFavorites(song).subscribe();
    setTimeout(() => {
      this.UpdateUserFavorites(); 
    }, 500
    );
  }
  
}
