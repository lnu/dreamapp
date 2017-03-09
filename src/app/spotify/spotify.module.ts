import { RouterModule } from '@angular/router';
import { BookmarksModule } from './../bookmarks/bookmarks.module';
import { FormsModule } from '@angular/forms';
import { SpotifyService } from './service/spotify.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './component/search/search.component';
import { PosterComponent } from './component/poster/poster.component';
import { AlbumDetailsComponent } from './component/album-details/album-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,    
    BookmarksModule
  ],
  declarations: [SearchComponent, PosterComponent, AlbumDetailsComponent],
  providers: [
    SpotifyService
  ]
})
export class SpotifyModule { }
