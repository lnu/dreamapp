import { SpotifyService } from './service/spotify.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './component/search/search.component';
import { PosterComponent } from './poster/poster.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchComponent, PosterComponent],
  providers: [
    SpotifyService
  ]
})
export class SpotifyModule { }
